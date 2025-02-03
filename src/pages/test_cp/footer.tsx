import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 页面主要内容 */}
      <main className="flex-grow">
        <h1 className="text-center text-2xl font-bold mt-8">页面内容区</h1>
        {/* 其他内容 */}
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default Home;
