import { useEffect, useState } from "react";
import userServiceInstance from "../../Services/UserService";

const UserDetails = ({ user }) => {
  console.log(" ~ UserDetails ~ user:", user);
  const [userAllData, setUserAllData] = useState(null);
  console.log(" ~ UserDetails ~ userAllData:", userAllData);

  useEffect(() => {
    fetchUserData(user.unique_name);
  }, []);

  const fetchUserData = async (userId) => {
    const responseData = await userServiceInstance.getUserInfoById(
      user.unique_name
    );
    console.log(" ~ fetchUserData ~ responseData:", responseData.data);
    setUserAllData(responseData.data);
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">User Info Page</h1>

      <h3 className="text-lg mb-4 text-center">Here is all your info</h3>

      {userAllData ? (
        <div className="space-y-2">
          <h4 className="text-md font-medium">Id: {userAllData.id}</h4>
          <h4 className="text-md font-medium">Name: {userAllData.name}</h4>
          <h4 className="text-md font-medium">Email: {userAllData.email}</h4>
          <h4 className="text-md font-medium">Address: {userAllData.address}</h4>
          <h4 className="text-md font-medium">Phone: {userAllData.phone}</h4>
          <h4 className="text-md font-medium">Password: {userAllData.password}</h4>
          <h4 className="text-md font-medium">Role: {userAllData.role}</h4>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;






