import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import { recentPosts, hotTags } from '@/data/footerData';

// import { getAllPostTitles, getAllPostTagSet } from '@/utils/posts'

// export async function getStaticProps() {
//   const allPostTitles = getAllPostTitles()
//   const allPostTagSet = getAllPostTagSet()
//   return {
//     props: {
//       allPostTitles, allPostTagSet
//     }
//   }
// }

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      {/* <main className="flex w-full justify-center"> */}
      {children}
      {/* </main> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogLayout;
