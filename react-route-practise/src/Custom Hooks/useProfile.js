import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProfile = () => {
  const [profileData, setProfileData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProfileData();
  },[id]);
  const fetchProfileData = async () => {
    const rawData = await fetch(`https://dummyjson.com/users/${id}`);
    const jsonData = await rawData.json();
    setProfileData(jsonData);
  };
  console.log(profileData);
  return profileData;
};
