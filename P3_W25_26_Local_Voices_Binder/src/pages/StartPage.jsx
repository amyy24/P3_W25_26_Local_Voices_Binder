import { useNavigate } from "react-router";
import { useEffect } from "react";
export function StartPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/map");
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
  return <h1>Startseite</h1>;
}




  


