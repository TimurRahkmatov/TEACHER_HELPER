import { Box, Typography } from "@mui/material";
import LogoImg from "../../assets/Images/logo.png";
import { SidebarButtons } from "../Buttons/SidebarButton";
import { DateRange, PlayLesson, RestoreRounded } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "23%",
        backgroundColor: "#40BFC1",
        padding: "3rem",
        height: "100vh",
        position: "fixed",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img
          style={{ width: "60px", height: "60px" }}
          src={LogoImg}
          alt="logo"
        />
        <Typography variant="h5" sx={{ color: "#fff", width: "100px" }}>
          Teacher Helper
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "6rem",
          width: "100%",
          gap: '2rem'
        }}
      >
        <SidebarButtons>
          <DateRange />
          Calendar
        </SidebarButtons>
        <SidebarButtons>
          <PlayLesson />
          Tematic plan
        </SidebarButtons>
        <SidebarButtons>
          <RestoreRounded />
          Resources
        </SidebarButtons>
      </Box>
    </Box>
  );
};

export default Sidebar;
