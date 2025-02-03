import { NextPage } from "next";
import ArticleCateCard from "@/components/ArticleCateCard";
import { articles } from "@/data/footerData";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCateCard
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
    </div>
  );
};

export default Home;
