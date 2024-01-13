import { Box, Typography } from "@mui/material";
import LogoImg from "../../assets/Images/logo.png";
import { SidebarButtons } from "../Buttons/SidebarButton";
import { DateRange, PlayLesson, RestoreRounded } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "18%",
        backgroundColor: "#fff",
        border: "1px solid #aeadad85",
        padding: "2.5rem 0",
        paddingRight: '0.5rem',
        height: "100vh",
        position: "fixed",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" , paddingLeft: "1rem"}}>
        <img
          style={{ width: "60px", height: "60px" }}
          src={LogoImg}
          alt="logo"
        />
        <Typography variant="h6" sx={{ color: "#40BFC1" , fontWeight: 600 }}>
          Teacher Helper
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "17px" , fontWeight: 600 , marginTop: '4rem' , padding: "0.7rem 1.3rem"}}>
        Apps
      </Typography>
      <Box
        sx={{
          display: "flex",
          paddingLeft: '0.3rem',
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: '1rem'
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
        <SidebarButtons>
          <RestoreRounded />
          Takliflar
        </SidebarButtons><SidebarButtons>
          <RestoreRounded />
          Clients
        </SidebarButtons><SidebarButtons>
          <RestoreRounded />
          Teachers
        </SidebarButtons>
      </Box>
    </Box>
  );
};

export default Sidebar;
