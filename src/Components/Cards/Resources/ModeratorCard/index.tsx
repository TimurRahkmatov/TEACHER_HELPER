import { Box, Button, Typography } from "@mui/material";
import AvatarImg from "../../../../assets/Images/avatar.png";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Юлия Владимировна",
    description:
      "Старший учитель математики Старший учитель математики Старший учитель математики Старший учитель Старший учитель математики Старший учитель математики",
    raiting: "4.9/5.0",
    experience: "15 лет",
    sertificat: "13",
    price: 10000,
  },
  {
    name: "Юлия Владимировна",
    description:
      "Старший учитель математики Старший учитель математики Старший учитель математики Старший учитель Старший учитель математики Старший учитель математики",
    raiting: "4.9/5.0",
    experience: "15 лет",
    sertificat: "13",
    price: 10000,
  },
  {
    name: "Юлия Владимировна",
    description:
      "Старший учитель математики Старший учитель математики Старший учитель математики Старший учитель Старший учитель математики Старший учитель математики",
    raiting: "4.9/5.0",
    experience: "15 лет",
    sertificat: "13",
    price: 10000,
  },
];

const ModeratorCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {data?.map((item) => (
        <Link style={{color: "inherit" , textDecoration: "none"}} to='/recources/science/class/moderator/1'>
          <Box
            sx={{
              width: "100%",
              minHeight: "200px",
              backgroundColor: "#074e5228",
              padding: "1rem",
              borderRadius: "10px",
              display: "flex",

              alignItems: "center",
              gap: "1rem",
              flexDirection: {lg: "inherit" , md: 'inherit' , sm: "column" , xs: "column"}
            }}
          >
            <Box>
              <img src={AvatarImg} alt="moderator img" />
            </Box>
            <Box sx={{ width: "90%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "600" }} variant="h6">
                  {item?.name}
                </Typography>
                <Button
                  sx={{
                    color: "#fff",
                    backgroundColor: "#58D5D3",
                    padding: "0.3rem 1.3rem",
                  }}
                >
                  {item?.price}{" "}
                  <Typography
                    sx={{
                      marginBottom: "8px",
                      fontSize: "7px",
                      marginLeft: "0.3rem",
                    }}
                    variant="body1"
                  >
                    сум/мес
                  </Typography>
                </Button>
              </Box>
              <Typography
                variant="body1"
                sx={{ marginTop: "1rem", width: "90%" }}
              >
                {item?.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                  // flexDirection: {lg: "inherit" , md: 'inherit' , sm: "column" , xs: "column"}
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#B0B0B0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#40BFC1" }}>
                      {(item?.raiting).slice(0, 3)}/
                    </Typography>
                    {(item?.raiting).slice(4, 7)}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#888888" }}>
                    рейтинг
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: "#40BFC1" }}>
                    15 лет
                  </Typography>
                  <Typography sx={{ color: "#888" }}>стаж</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: "#40BFC1" }}>
                    13 лет
                  </Typography>
                  <Typography sx={{ color: "#888" }}>сертификаты</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ModeratorCard;
