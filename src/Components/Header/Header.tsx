import { ExpandMore, NotificationAddSharp, Search } from "@mui/icons-material";
import { Box, Container, Input, Typography } from "@mui/material";
import AvatarkaImg from "../../assets/Images/avatarka.png";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="/">Options</Link>,
  },
  {
    key: "2",
    label: <Link to="/">Takliflar</Link>,
  },
  {
    key: "3",
    label: <Link to="/">Mentorga ariza</Link>,
  },
];

const Header = () => {
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
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <ExpandMore />
                  </Space>
                </a>
              </Dropdown>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
