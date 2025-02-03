import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import Article from "@/components/Article";
import markdownToHtml from "@/utils/markdownToHtml";

interface BlogPostProps {
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), "posts", `${params?.slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  const htmlContent = await markdownToHtml(content);

  return { props: { content: htmlContent } };
};

const BlogPost: React.FC<BlogPostProps> = ({ content }) => {
  return (
    <div className="flex">
      <main className="flex-1">
        <Article content={content} />
      </main>
    </div>
  );
};

export default BlogPost;
