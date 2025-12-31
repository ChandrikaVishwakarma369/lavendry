import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-6">
      <h1 className="text-6xl font-bold text-purple-700">404</h1>
      <p className="text-2xl text-gray-700 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
