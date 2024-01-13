import { ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const fanlar = [
  {
    sinf: "5 класс",
    moderator: "3 модератора",
  },
  
  {
    sinf: "6 класс",
    moderator: "6 модератора",
  },
  {
    sinf: "8 класс",
    moderator: "2 модератора",
  },
  {
    sinf: "7 класс",
    moderator: "3 модератора",
  },
  {
    sinf: "9 класс",
    moderator: "3 модератора",
  },
  {
    sinf: "10 класс",
    moderator: "3 модератора",
  },

];

const ClassResources = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {fanlar?.map((item) => (
        <Link
          to="/recources/science/class/1"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Box
            sx={{
              width: "350px",
              minHeight: "70px",
              borderRadius: "10px",
              backgroundColor: "#F6F6F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "19px" }}>
                {item?.sinf}
              </Typography>
              <Typography sx={{ fontWeight: "600", color: "grey" }}>
                {item?.moderator}
              </Typography>
            </Box>
            <ArrowRight />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ClassResources;
