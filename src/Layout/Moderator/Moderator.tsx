import { Box } from "@mui/material";
import ModeratorSidebar from "../../Components/ModeratorSidebar";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Moderator = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <ModeratorSidebar setOpenSidebar={setOpenSidebar} open={openSidebar}  />

      <Box
        sx={{
          marginLeft: { lg: "18%", md: "0", sm: "0px", xs: "0px" },
          width: { lg: "82%", md: "100%", sm: "100%", xs: "100%" },
        }}
      >
        <Header setOpenSidebar={setOpenSidebar} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Moderator;
