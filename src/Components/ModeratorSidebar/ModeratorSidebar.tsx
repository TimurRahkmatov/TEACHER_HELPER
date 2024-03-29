import { Close, DateRange } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import LogoImg from "../../assets/Images/logo.png";

import { Link } from "react-router-dom";
import { SidebarButtons } from "../Buttons/SidebarButton";
import { useEffect, useRef } from "react";

const ModeratorSidebar = ({ open, setOpenSidebar }: any) => {
  const sideNavRef: any = useRef(null);
  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: Event): void {
    if (sideNavRef.current && !sideNavRef.current?.contains(event.target)) {
      setOpenSidebar(false);
    }
  }
  return (
    <Box
      component="div"
      ref={sideNavRef}
      className={open === true ? "sidebar_res" : " sidebar "}
      sx={{
        minWidth: { md: "18%" },
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px #aeadad4c",
        padding: "2.5rem 0",
        top: 0,
        bottom: 0,
        left: 0,
        paddingRight: "0.5rem",
        height: "100vh",
        position: "fixed",
        zIndex: 999,
      }}
    >
      <Box
        component="div"
        onClick={() => setOpenSidebar(false)}
        sx={{
          padding: "0.3rem 0.5rem",
          margin: "0.5rem",
          position: "absolute",
          top: "0",
          right: "0",
          borderRadius: "8px",
          border: "1px solid #40BFC1",
          color: "#40BFC1",
          display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Close />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          maxWidth: "100%",
          paddingLeft: "1rem",
        }}
      >
        <img
          style={{ width: "60px", height: "60px" }}
          src={LogoImg}
          alt="logo"
        />
        <Typography
          variant="h6"
          sx={{
            color: "#40BFC1",
            fontWeight: 600,
            width: { lg: "100%", md: "60%", sm: "60%", xs: "60%" },
          }}
        >
          Teacher Helper
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "17px",
          fontWeight: 600,
          marginTop: { lg: "4rem", md: "3rem", sm: "2.5rem", xs: "2rem" },
          padding: "0.7rem 1.3rem",
        }}
      >
        Apps
      </Typography>
      <Box
        sx={{
          display: "flex",
          paddingLeft: "0.3rem",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        }}
      >
        <Link className="sidebar_link" to="/moderator/resources">
          <SidebarButtons>
            <DateRange />
            Resources
          </SidebarButtons>
        </Link>
      </Box>
    </Box>
  );
};

export default ModeratorSidebar;
