import { Box } from "@mui/material";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

const Private = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Sidebar />
      <Box>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Private;
