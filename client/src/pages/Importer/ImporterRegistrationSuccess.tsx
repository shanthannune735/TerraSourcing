import { FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ImporterRegistrationSuccess(){
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center my-20">
        <div className="mb-4">
          <FaUserCheck className="text-green-500 text-4xl mx-auto" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Registration Successful
        </h1>
        <p className="text-gray-600 mb-6">
          Your account has been created successfully. You can now log in and start using TerraSourcing.
        </p>
        <div>
          <Link to="/importer/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
