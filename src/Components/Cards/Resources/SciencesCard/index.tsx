import { ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";


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
    <Box sx={{display: 'flex' , justifyContent: "space-between" , flexWrap: "wrap" , gap: '1rem' }}>
          {fanlar?.map((item) => (
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
          ))}
        </Box>
  );
};

export default SciencesCard;
