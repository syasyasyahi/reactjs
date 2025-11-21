import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:8000/api/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    setProfile(res?.data?.data ?? null);
  };

  console.log(profile);

  // useEffect(function () {})
  useEffect(() => {
    fetchProfile();
  }, []);

  return <ProfileCard photo="Pic" name={profile?.data?.data?.name} job={profile?.data?.data?.email} />;
};

export default ProfilePage;
