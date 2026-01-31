import { useNavigate } from "react-router";
import { useEffect } from "react";
import Logo from "../assets/Logo.png";
import Box from "@mui/material/Box";

export function StartPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/map");
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDEDEB",
      }}
    >
      <img
        src={Logo}
        alt="Start"
        style={{
          width: "100%",
          maxWidth: "300px",
        }}
      />
    </Box>
  )

}




  


