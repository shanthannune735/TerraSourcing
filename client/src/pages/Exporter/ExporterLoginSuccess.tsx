import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // or any routing library you use

export default function ExporterLoginSuccess(){
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full my-20">
        <div className="flex items-center justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Login Successful
        </h1>
        <p className="text-center text-gray-600 mb-6">
          You have successfully logged in. You can now access your account.
        </p>
        <div className="flex justify-center">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
