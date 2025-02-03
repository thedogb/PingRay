import Layout from "@/components/Layout";
import Article from "@/components/Article";
import fs from "fs";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const filePath = __filename; // 获取当前文件路径
  const fileStats = fs.statSync(filePath);
  const lastModifiedISOTime = fileStats.mtime.toISOString(); // 转换为 ISO 格式
  const lastModifiedLocaleTime = fileStats.mtime.toLocaleDateString("en-US", {
    month: "short", // "Nov"
    day: "2-digit", // "13"
    year: "numeric", // "2024"
  }); // 转换为 ISO 格式

  return {
    props: {
      lastModifiedISOTime,
      lastModifiedLocaleTime,
    },
  };
};

interface Props {
  lastModifiedISOTime: string;
  lastModifiedLocaleTime: string;
}

const BlogPost: React.FC<Props> = ({
  lastModifiedLocaleTime,
  lastModifiedISOTime,
}) => {
  const content = `
istj，有点轴，有自己的想法，尝试了、正在尝试、还想尝试很多事情，目标是为了积攒人生体验。情绪还算稳定，喜欢一首歌，张韶涵的《阿刁》，给过我很多能量。

想要像树一样，树只会向上生长。

在健身。在打网球。在做中点。目前正在研究摄影，想要拍星星、拍建筑、拍姑娘。

工作还行吧，现在的目标是早日退休。

理想的亲密关系：《生活大爆炸》中在霍华德结婚的时候，谢尔顿送了他们一句话“希望你们给与彼此的快乐和我给自己的一样多”
    `;

  return (
    <Layout>
      <div className="flex w-full justify-center bg-white">
        <main className="w-full max-w-[700px] pt-[130px] pb-[20px] px-[25px] animate-fadeIn">
          <h1 className="text-[21px]">关于</h1>
          <div className="post-data text-[12px] text-[#5f5f5f]">
            <time dateTime={lastModifiedISOTime} itemProp="datePublished">
              Published on {lastModifiedLocaleTime}
            </time>
          </div>
          <Article content={content} />
        </main>
        {/* <aside className="w-1/4">
          <Toc content={content} />
        </aside> */}
      </div>
      <div
        id="directory-content"
        className="directory-content  max-[1000px]:hidden"
      >
        <nav className="toc js-toc"></nav>
      </div>
    </Layout>
  );
};

export default BlogPost;
