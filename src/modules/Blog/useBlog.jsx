import { useSearchParams } from "react-router-dom";
import { BlogData } from "./BlogData";
import BlogNotFound from "./components/BlogNotFound";
import { getComponent } from "./getComponent";

const useBlog = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const blogId = searchParams.get("id") - 1;
  let blogContent = <BlogNotFound />;
  if (blogId >= 0 && blogId < BlogData.length) {
    const blog = BlogData[blogId];
    blogContent = blog.map((content, index) => {
      const key = Object.keys(content)[0];
      return {
        type: key,
        component: getComponent(content),
      };
    });
  }
  return {
    blogContent,
  };
};

export default useBlog;
