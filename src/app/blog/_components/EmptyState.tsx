
import {  Database } from "lucide-react";
import React from "react";
interface Props {
  message?: string;
}
const EmptyState = ({ message }: Props) => {
  return (
    <div className="flex flex-col text-center  p-20 border border-dashed text-gray-400">
     <div className="flex justify-center mb-6"><Database/></div>

      <h1>{message ?? "NO DATA AVAILABLE"}</h1>
      
    </div>
  );
};

export default EmptyState;
