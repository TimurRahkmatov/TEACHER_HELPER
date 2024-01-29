import { LogoutOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth_api } from "../../../Api/auth.api";

const LogOutButton = () => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      const { data } = await auth_api.logOut();
      if (data.code === 200) {
        localStorage.clear();
        navigate("/signin");
      }
    } catch (error) {}
  };
  return (
    <>
      <Button
        onClick={() => handleLogOut()}
        sx={{
          color: "red",
          textTransform: "capitalize",
          display: "flex",
          gap: "0.4rem",
          border: "1px solid red",
          "&:hover": {
            backgroundColor: "red",
            color: " #fff",
          },
        }}
      >
        <LogoutOutlined /> Выйти
      </Button>
    </>
  );
};

export default LogOutButton;
