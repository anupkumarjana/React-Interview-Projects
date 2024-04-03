import React from "react";
import { useData } from "../Custom Hooks/useData";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const Users = () => {
  const users = useData();
  console.log(users);
  return (
    <div className="flex flex-wrap gap-10 px-40">
      {users.map((user) => (
        <Link key={user.id} to={"users/" + user.id}>
          <UserCard user={user} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
