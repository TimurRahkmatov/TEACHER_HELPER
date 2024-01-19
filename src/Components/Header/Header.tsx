import {
  Chat,
  Description,
  KeyboardArrowDown,
  MenuOpen,
  NotificationAddSharp,
  Search,
  Settings,
} from "@mui/icons-material";
import Avatarka from "../../assets/Images/avatarka.png";
import { Box, Container, Fade, Input, Menu, Typography } from "@mui/material";
import AvatarkaImg from "../../assets/Images/avatarka.png";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setOpenSidebar }: any) => {
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
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            onClick={() => setOpenSidebar(true)}
            sx={{
              display: { lg: "none", md: "block", sm: "block", xs: "block" },
              padding: "0.2rem 0.4rem",
              borderRadius: "8px",
              
              "&:hover": {
                border: "2px solid #40BFC1",
                backgroundColor: "#40bfc175",
                transition: "0.3s",
              },
            }}
            component="div"
            // onClick={() => openSidebar(true)}
          >
            <MenuOpen />
          </Box>
          <Box></Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { lg: "400px", md: "400px", sm: "350px", xs: "250px" },
                marginRight: {lg: '0' , md: '0' , sm: '1rem' , xs: '1rem'}
              }}
            >
              <Input
                sx={{
                  width: {
                    lg: "400px",
                    md: "400px",
                    sm: "350px",
                    xs: "250px",
                    padding: "0.2rem 0",
                  },
                  
                }}
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
            <NotificationAddSharp sx={{ color: "#40BFC1" }} />
            <Box sx={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
              <Box sx={{ width: "34px", height: "34px" }}>
                <img
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  src={AvatarkaImg}
                  alt="avatarka"
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#54657E",
                  display: { lg: "none", md: "none", sm: "none", xs: "none" },
                }}
              >
                Danielle Campbell{" "}
              </Typography>
              <Box
                sx={{
                  display: { lg: "block", md: "block", sm: "none", xs: "none" },
                }}
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
              PaperProps={{
                sx: {
                  width: { lg: "255px", md: "240px", sm: "200px", xs: "190px" },
                  marginTop: "-4rem",
                },
              }}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <Box>
                <Box sx={{ padding: "1rem" }}>
                  <Box sx={{ width: "100px", height: "100px" }}>
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
                  <Typography variant="body1">Учитель математики</Typography>
                </Box>
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
                      padding: "0.5rem 1rem",
                      "&:hover": {
                        backgroundColor: "#1c80852c",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <Description sx={{ color: "#1C7F85" }} />
                    <Typography variant="body1">
                      <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/application"
                      >
                        Moderator bo’lish uchun ariza berish
                      </Link>
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
