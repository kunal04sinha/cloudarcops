import { useNavigate } from "react-router-dom";

const BlogNotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Blog Post Not Found</p>
        <p className="mt-2 text-gray-500">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={handleBackClick}
          className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BlogNotFound;
