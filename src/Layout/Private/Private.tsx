import { Box } from "@mui/material";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Private = () => {
  const [openSidebar , setOpenSidebar] = useState(false)
  console.log(openSidebar);
  
  return (

    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
      <Sidebar setOpen={openSidebar}  />
      <Box sx={{marginLeft: {lg: "18%" , md: "0" , sm: "0px" , xs: "0px"} , width: {lg: "82%" , md: "100%" , sm : "100%" , xs:"100%"}}}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Private;
