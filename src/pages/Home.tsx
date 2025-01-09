import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, _setUser] = useState({ name: "yannick" });
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/trips");
    }
  }, []);

  return <></>;
};

export default Home;
