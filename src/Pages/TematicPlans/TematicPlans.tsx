import { AutoStories, ExpandMore, FmdGood, LocationCity, MenuBook } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="/">Options</Link>,
  },
];

const TematicPlans = () => {
  return (
    <Box sx={{ padding: "2rem 0" , backgroundColor: "#dcd8d841" , minHeight: "90vh" }}>
      <Container>
        <Box>
          <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: "600" }}>
            Tematic plan
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "17px", fontWeight: "600" , padding: "0.2rem 0" }}
          >
            Tematik plan haqida definition
          </Typography>

          <Box
            sx={{
                marginTop: '2rem',
              width: "100%",
              borderRadius: "8px",
              padding: "1rem 1rem",
              border: "1px solid #797D8C",
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
           
            <Button
              sx={{
                padding: "5px 1.5rem",
                backgroundColor: "#40BFC1",
                color: "#fff",
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TematicPlans;
