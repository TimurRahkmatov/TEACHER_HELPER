import {
  Airplay,
  Cloud,
  Description,
  Tv,
  Visibility,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ModeratorTable = () => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.4rem 2rem",
          backgroundColor: "#fff",
          borderRadius: "7px",
          flexDirection: {
            md: "initial",
            sm: "column ",
            xs: "column",
          },
          height: { lg: "170px", md: "170px", sm: "400px", xs: "400px" },
          width: { lg: "100%", md: "100%", sm: "80%", xs: "80%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <Typography>Mavzu nomi</Typography>
          </Box>
          <Box sx={{ margin: "auto" }}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", maxWidth: "520px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit id
              quidem distinctio pe
            </Typography>
            <Box sx={{ display: "flex", gap: "0.8rem", color: "grey" }}>
              <Typography>Algebra </Typography>
              <Typography>1*sinf</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { lg: "space-between", md: "space-between" },
            flexDirection: { lg: "column", md: "column" },
            gap: "0.5rem",
            alignItems: "center",
            height: "100%",
            width: { lg: "200px", md: "200px", sm: "100%", xs: "100%" },
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <Typography>Resurs turi</Typography>
          </Box>
          <Box
            sx={{
              margin: { lg: "auto", md: "auto", sm: "0", xs: "0" },
              display: { lg: "block", md: "block", sm: "flex", xs: "flex" },
              justifyContent: "start",
            }}
          >
            <Box>
              {" "}
              <Description /> <Airplay />
            </Box>
            <Box>
              {" "}
              <Tv /> <Cloud />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "column",
              md: "column",
            },
            gap: "0.5rem",
            alignItems: "center",
            width: { lg: "200px", md: "200px", sm: "100%", xs: "100%" },
            height: "100%",
          }}
        >
          <Box>
            <Typography sx={{ textAlign: "start" }}>Resurs turi</Typography>
          </Box>
          <Box sx={{ margin: { lg: "auto", md: "auto", sm: "0", xs: "0" } }}>
            <Typography sx={{ textAlign: "center", margin: "auto" }}>
              2ta
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              lg: "space-between",
              md: "space-between",
              sm: "start",
              xs: "start",
            },
            flexDirection: { lg: "column", md: "column" },
            height: "100%",
            gap: { lg: "0", md: "0", sm: "1rem", xs: "1rem" },
            width: { lg: "100px", md: "100px", sm: "100%", xs: "100%" },
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <Typography>Harakatlar</Typography>
          </Box>
          <Box sx={{ margin: { lg: "auto", md: "auto", sm: "0", xs: "0" } }}>
            <Link to='/recources/science/class/moderator/science/1'>
              <Button
                sx={{
                  backgroundColor: "#40BFC1",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  marginBottom: "5px",
                  "&:hover": {
                    color: "#40BFC1",
                    border: "1px solid #40BFC1",
                    backgroundColor: "#fff",
                    transition: "0.4s",
                  },
                }}
              >
                <Visibility />
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModeratorTable;
