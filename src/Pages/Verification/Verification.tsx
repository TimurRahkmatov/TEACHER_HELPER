import { Box, Container, TextField, Typography } from "@mui/material";
import PhoneImg from "../../assets/Images/smartphone.svg";
import { useState } from "react";
import { auth_api } from "../../Api/auth.api";
import { Button } from "antd";
const Verification = () => {
  const [confirm , setConfirm] = useState(0)
  const handleVerification =async () => {
      try {
        
        const {data} = await auth_api.verification({username: "998901342386" , code: confirm})
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
  }

  const handleResed =async () => {
    try {
      // const {data} = await auth_api.resed({username })
    } catch (error) {
      console.log(error);
      
    }
  } 

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
            <Typography component='p' onClick={() => handleResed()} sx={{color: 'blue'}}>Qayta yuborish</Typography>
            <Box  sx={{display: "flex" , justifyContent: 'space-between' , width: '100%' , marginTop: '0.5rem'}}>
              <TextField
              value={confirm}
              onChange={(e:any) => setConfirm(e.target.value)}
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
            <Button onClick={() => handleVerification()}>submit</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Verification;
