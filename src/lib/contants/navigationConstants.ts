import {  SideBarSubItemType } from "../types/types";

// MAIN ROUTES
export const FLUTTER_ROUTE = "/blog/flutter";
export const FIREBASE_ROUTE = "/blog/firebase";
export const REACT_NATIVE_ROUTE = "/blog/react-native";
export const REACT_NEXTJS_ROUTE = "/blog/react-nextjs";
export const SUPABASE_ROUTE = "/blog/supabase";
export const SWIFT_ROUTE = "/blog/swift";
export const VUE_NUXT_ROUTE = "/blog/vue-nuxt";
export const DATABASES_ROUTE = "/blog/databases";
// export const _ROUTE = "/blog/";


// FEATURED ARTICLES

export const FLUTTER_ROUTE_FEATURED_ARTICLES: SideBarSubItemType[]  = [
  {
    title: "Firebase Messaging",
    url: `${FLUTTER_ROUTE}/fcm`,
  },
  {
    title: "GetX Tips",
    url: `${FLUTTER_ROUTE}/getx-tips`,
  },
  
]


// FLUTTER SUB ROUTES
export const FLUTTER_TIPS_SUB_ROUTE = "/blog/flutter/tips";
// export const FLUTTER_SUB_ROUTE = "/blog/flutter";
export const FLUTTER_TIPS_SUB_ROUTE_DATA: SideBarSubItemType[] = [
  
    {
      title: "Flutter Tips",
      url: FLUTTER_TIPS_SUB_ROUTE,
    },
  ];

// DATABSES SUB ROUTES
export const DATABASES_SQL_ROUTE = "/blog/databases/sql";
export const DATABASES_PGSQL_ROUTE = "/blog/databases/pgsql";
// FIREBASE SUB ROUTES
// REACT NATIVE SUB ROUTES
// REACT NEXTJS SUB ROUTES
// SUPABASE SUB ROUTES
// SWIFT SUB ROUTES
// VUE SUB ROUTES

// MAIN ISSUES ROUTES
export const FLUTTER_ISSUES_ROUTE = "/blog/issues/flutter";
export const FIREBASE_ISSUES_ROUTE = "/blog/issues/firebase";
export const REACT_ISSUES_ROUTE = "/blog/issues/react";
export const SUPABASE_ISSUES_ROUTE = "/blog/issues/supabase";