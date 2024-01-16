import { ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const fanlar = [
  {
    title: "Точные науки",
    desc: "6 предметов",
  },
  {
    title: "Гуманитарные науки",
    desc: "6 предметов",
  },
  {
    title: "Естественные науки",
    desc: "6 предметов",
  },
  {
    title: "Общие",
    desc: "6 предметов",
  },
];
const SciencesCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {lg: "start" , md: "start" , sm: 'center' , xs: 'center'},
        gap: "2rem",
      }}
    >
      {fanlar?.map((item) => (
        <Link
          to="/recources/science/1"
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
                {item?.title}
              </Typography>
              <Typography sx={{ fontWeight: "600", color: "grey" }}>
                {item?.desc}
              </Typography>
            </Box>
            <ArrowRight />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default SciencesCard;
