import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col gap-4 items-center flex-wrap border rounded-lg cursor-pointer p-4">
      <img src={user.image} alt="Profile" className="w-40 h-40" />
      <h3 className="text-black">{user.firstName + " " + user.lastName}</h3>
      <h4>{user.email}</h4>
    </div>
  );
};

export default UserCard;
