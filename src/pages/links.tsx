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
<ul>
	<li><a href="https://www.linpx.com/" target="_blank">LiNPX</a></li>
	<li><a href="https://www.peterjxl.com/" target="_blank">晓林的博客</a></li>
	<li><a href="https://www.dutype.com/" target="_blank">独唱者</a></li>
        <li><a href="https://www.chenxublog.com/" target="_blank">晨旭的博客</a></li>
        <li><a href="https://hux.ink/" target="_blank">Counting Stars💫</a></li>
        <li><a href="https://www.aowugong.top/blog" target="_blank">嗷呜公</a></li>
        <li><a href="https://www.brmys.top" target="_blank">白日梦与诗</a></li>
        <li><a href="https://blog.mimvp.com" target="_blank">米扑博客</a></li>
        <li><a href="https://www.ifb.me/zh" target="_blank">Innovation for Bytes</a></li>
        <li><a href="https://chaoszhu.com" target="_blank">Chaoszhu'Blog</a></li>
        <li><a href="https://blog.pantheon.press" target="_blank">Pantheon</a></li>
        <li><a href="https://fffdann.com" target="_blank">FFF团</a></li>
        <li><a href="https://ryooma.com" target="_blank">ryooma.com</a></li>
        <li><a href="https://www.evan.xin" target="_blank">Evan</a></li>
        <li><a href="https://songxwn.com" target="_blank">Song's Blog</a></li>
        <li><a href="https://www.xiaowuleyi.com" target="_blank">小吴乐意Blog</a></li>
        <li><a href="https://www.qqzmly.com" target="_blank">程志辉博客</a></li>
        <li><a href="https://biji.io" target="_blank">设计笔记</a></li>
        <li><a href="https://www.duanxiansen.com" target="_blank">三无青年</a></li>
        <li><a href="https://tumutanzi.com" target="_blank">土木坛子</a></li>
        <li><a href="https://199604.com" target="_blank">记忆角落</a></li>
</ul>
    `;

  return (
    <Layout>
      <div className="flex w-full justify-center bg-white">
        <main className="w-full max-w-[700px] pt-[130px] pb-[20px] px-[25px] animate-fadeIn">
          <h1 className="text-[21px]">友链</h1>
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
