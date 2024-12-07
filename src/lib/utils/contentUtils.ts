import fs from "fs";
import path from "path";
import matter from "gray-matter";


const POSTS_PER_PAGE = 6; //
// get all files from the dir

export function getMDXFiles(dir: string){
    try {
        return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
    } catch (error) {
        
        throw error;
    }
    
}
// read data from the files
function readMDXFile(filePath: string) {
    try {
        const rawContent = fs.readFileSync(filePath, "utf-8");
        return matter(rawContent); 
    } catch (error) {
        throw error;

    }
}

// present the mdx data and meta data

function getMDXData(dir : string){
    try {
        const mdxFiles = getMDXFiles(dir);
 
    return mdxFiles.map((file) => {
        const {data:metadata, content} =  readMDXFile(path.join(dir,file));
        const slug =path.basename(file, path.extname(file));
        
        return {
            metadata,
            slug,
            content,
        }
    })
    } catch (error) {

        throw error;
        
    }
}


export function getBlogPostsFromDirectory(dir: string){

    try {
        return  getMDXData(path.join(process.cwd(),"src","content", dir ))
    // return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
    } catch (error) {
        throw error;

    }

}


export function getPaginatedBlogPostsFromDirectory(dir: string, pageNumber: number){

    try {
        const allPosts = getBlogPostsFromDirectory(dir);
        const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

        const paginatedPosts = allPosts.slice(
            (pageNumber - 1) * POSTS_PER_PAGE,
            pageNumber * POSTS_PER_PAGE
          );
    return { paginatedPosts, totalPages };
    } catch (error) {
        throw error;

    }

}



