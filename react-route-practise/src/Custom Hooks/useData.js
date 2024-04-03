import { useEffect, useState } from "react";

export const useData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const rawData = await fetch("https://dummyjson.com/users");
      const jsonData = await rawData.json();
      // console.log(jsonData);
      setUsers(jsonData.users);
    } catch (err) {
      console.log("Error fetching users data", err);
    }
  };
  return users;
};
