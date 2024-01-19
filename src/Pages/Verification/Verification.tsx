import { Box, Container, Typography } from "@mui/material";
import PhoneImg from "../../assets/Images/smartphone.svg";
import { useState } from "react";
import { auth_api } from "../../Api/auth.api";
import { Button } from "antd";
import { useAppSelector } from "../../store";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
const Verification = () => {
  const [confirm, setConfirm] = useState('');
  const state = useAppSelector((state) => state.auth);
  
  const handleVerification = async () => {
    try {
      const { data } = await auth_api.verification({
        username: state.auth.username,
        code: +confirm,
      });
      if(data?.success === true) {
        toast(data?.message , {type: "success"})
        localStorage.setItem("token" , data?.data.token)
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResed = async () => {
    try {
      const { data } = await auth_api.resed({ username: state.auth.username });
      console.log(data);
      if (data.code === 200) {
        toast(data?.message, { type: "success" });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <Typography
              component="p"
              onClick={() => handleResed()}
              sx={{ color: "blue" }}
            >
              Qayta yuborish
            </Typography>
            <OtpInput

              value={confirm}
              onChange={setConfirm}
              numInputs={6}
              inputStyle={{width: '40px' , height: '40px' , margin: '2rem 0'}}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input  {...props} />}
            />
            <Button onClick={() => handleVerification()}>submit</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Verification;
