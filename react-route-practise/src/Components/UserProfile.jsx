import React from "react";
// import { useData } from "../Custom Hooks/useData";
import { useProfile } from "../Custom Hooks/useProfile";

const UserProfile = () => {
  const user = useProfile();
  console.log(user);

  return Object.keys(user).length === 0 ? (
    <div className="flex justify-center items-center"><h1>Loading...</h1></div>
    
  ) : (
    <div className="flex flex-col gap-4 items-center rounded-lg cursor-pointer p-4">
      <img src={user.image} alt="Profile" className="w-40 h-40" />
      <h3 className="text-black">{user.firstName + " " + user.lastName}</h3>
      <h4>{user.email}</h4>
      <h4>{user.phone}</h4>
      <h4>{user.age}</h4>
      <h4>{user.gender}</h4>
      <h4>{user.email}</h4>
      <h4>{user.height}</h4>
      <h4>{user.weight}</h4>
    </div>
  );
};

export default UserProfile;
