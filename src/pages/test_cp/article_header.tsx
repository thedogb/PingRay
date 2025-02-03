import ArticleHeader from "@/components/ArticleHeader";
import { blogHeaderData } from "@/data/footerData";

export default function ah() {
  return (
    <>
      <ArticleHeader
        title={blogHeaderData.title}
        date={blogHeaderData.date}
        category={blogHeaderData.category}
        comments={blogHeaderData.comments}
        tags={blogHeaderData.tags}
        imgLink={blogHeaderData.imgLink}
      ></ArticleHeader>
    </>
  );
}
