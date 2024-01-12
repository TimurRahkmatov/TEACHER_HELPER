import { Box, Container, TextField, Typography } from "@mui/material";
import PhoneImg from "../../assets/Images/smartphone.svg";
const Verification = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "270px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={PhoneImg} alt="phone img" />
            <Typography sx={{ fontWeight: "600" }} variant="h5">
              Two Step Verification
            </Typography>
            <Typography variant="body1" sx={{ color: "#B5B5C3" }}>
              Enter the verification code we sent to{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "600" }}
            >
              ******7859
            </Typography>
            <Box sx={{ width: "100%", marginTop: "1rem" }}>
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                Type your 6 digit security code
              </Typography>
            </Box>
            <Box sx={{display: "flex" , justifyContent: 'space-between' , width: '100%' , marginTop: '0.5rem'}}>
              <TextField
                sx={{ width: "55px", borderRadius: "8px", border: "none" }}
              ></TextField>
              <TextField
                sx={{ width: "55px", borderRadius: "8px", border: "none" }}
              ></TextField>
              <TextField
                sx={{ width: "55px", borderRadius: "8px", border: "none" }}
              ></TextField>
              <TextField
                sx={{ width: "55px", borderRadius: "8px", border: "none" }}
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Verification;
