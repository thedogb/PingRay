import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";

const Home: React.FC = () => {
  const articlesPerPage = 12; // 每页文章数
  const allArticles = [
    // 假设这里是文章数据数组
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    {
      title: "文章1",
      date: "Dec 1, 2024",
      category: "分类1",
      image: "/images/张爱玲.png",
      description: "描述1",
    },
    // 填充更多文章...
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  const currentArticles = allArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
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
  );
};

export default Home;
