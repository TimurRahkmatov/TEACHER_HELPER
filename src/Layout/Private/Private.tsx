import { Box } from "@mui/material";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const Private = () => {
  const [openSidebar , setOpenSidebar] = useState(false)
  const token = localStorage.getItem("token")
  return token ? (

    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
      <Sidebar setOpenSidebar={setOpenSidebar} open={openSidebar}  />
      <Box sx={{marginLeft: {lg: "18%" , md: "0" , sm: "0px" , xs: "0px"} , width: {lg: "82%" , md: "100%" , sm : "100%" , xs:"100%"}}}>
        <Header  setOpenSidebar={setOpenSidebar} />
        <Outlet />
      </Box>
    </Box>
  ) : <Navigate to='/signin' />;
};

export default Private;
