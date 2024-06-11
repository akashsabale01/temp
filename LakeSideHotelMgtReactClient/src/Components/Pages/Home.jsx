import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="px-4 py-6 max-w-2xl mt-4 mx-auto bg-white rounded-lg shadow-md">
      {user ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to LakeSide Hotel</h1>
          <h2 className="text-xl mb-4 text-center">Hello, {user.email}</h2>

          <div className="text-center">
            <Link to="/userDetails" className="mt-2 text-blue-500 hover:underline">
              View User Details
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center">
          <Link to="/login" className="btn btn-primary mt-4">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
