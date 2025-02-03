import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

import { articles } from "@/data/footerData";
import { HStack, Spacer } from "@/components/SwiftUI";

export default function Home() {
  const articlesPerPage = 12; // 每页文章数
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );
  return (
    <>
      <Header></Header>
      <HStack bg-gray-100 py-8>
        <Spacer></Spacer>
        <div className="max-w-screen-lg min-h-screen  py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                date={article.date}
                category={article.category}
                image={article.image}
                description={article.description}
                id=""
              />
            ))}
          </div>

          {/* 分页组件 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
        <Spacer></Spacer>
      </HStack>
      <Footer />
    </>
  );
}
