import {
  KeyboardArrowDown,
  KeyboardReturnOutlined,
  NotificationAddSharp,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Fade,
  Input,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
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
              sx={{ width: "500px" }}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
