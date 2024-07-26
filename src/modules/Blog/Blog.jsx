import Banner from "../../components/Banner";
import useBlog from "./useBlog";

const Blog = () => {
  const { blogContent } = useBlog();
  return blogContent;
};
export default Blog;
