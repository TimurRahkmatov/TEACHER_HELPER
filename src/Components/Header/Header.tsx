import {
  Chat,
  Description,
  KeyboardArrowDown,
  NotificationAddSharp,
  Search,
  Settings,
} from "@mui/icons-material";
import Avatarka from "../../assets/Images/avatarka.png";
import { Box, Container, Fade, Input, Menu, Typography } from "@mui/material";
import AvatarkaImg from "../../assets/Images/avatarka.png";
import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{ padding: "1rem 0", boxShadow: "0px 0px 20px #54515135" }}
    >
      <Box component="nav">
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              justifyContent: "end",
            }}
          >
            <Box sx={{ position: "relative", width: "400px" }}>
              <Input
                sx={{ width: "400px", padding: "0.2rem 0" }}
                placeholder="Search"
              />
              <Search
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "25%",
                  color: "#40BFC1",
                }}
              />
            </Box>
            <NotificationAddSharp />
            <Box sx={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
              <Box sx={{ width: "34px", height: "34px" }}>
                <img src={AvatarkaImg} alt="avatarka" />
              </Box>
              <Typography variant="body1" sx={{ color: "#54657E" }}>
                Danielle Campbell{" "}
              </Typography>
              <Box
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <KeyboardArrowDown />
              </Box>
            </Box>
            <Menu
              PaperProps={{ sx: { width: "255px" , marginTop: "-4rem"  } }}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <Box >
                <Box sx={{padding: '1rem'}}><Box sx={{ width: "100px", height: "100px" }}>
                  <img
                    style={{ width: "70px", height: "70px" }}
                    src={Avatarka}
                    alt="avatarka"
                  />
                </Box>
                <Typography
                  sx={{
                   
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: "-0.9rem",
                  }}
                >
                  Юлия Владимировна
                </Typography>
                <Typography variant="body1">Учитель математики</Typography></Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: '0.5rem 1rem',
                      "&:hover": {
                        backgroundColor: "#1c80852c",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <Description sx={{ color: "#1C7F85" }} />
                    <Typography variant="body1">
                      Moderator bo’lish uchun ariza berish{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1rem",
                      
                      "&:hover": {
                        backgroundColor: "#1c80852c",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <Settings sx={{ color: "#1C7F85" }} />
                    <Typography variant="body1">Настройки </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1rem",
                      "&:hover": {
                        backgroundColor: "#1c80852c",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <Chat sx={{ color: "#1C7F85" }} />
                    <Typography variant="body1">Чат поддержки </Typography>
                  </Box>
                </Box>
              </Box>
            </Menu>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
