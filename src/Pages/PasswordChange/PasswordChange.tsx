import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { auth_api } from "../../Api/auth.api";
import { toast } from "react-toastify";

const PasswordChange = () => {
  const [change_password, setChangePassword] = useState("");
  const token = localStorage.getItem("token");
  const handleChangePassword = async () => {
    try {
      const { data } = await auth_api.passwordChange(
        { password: change_password },
        token + ""
      );
      if(data.code === 200) {
        toast(data.message , {type: "info"})
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: "450px",
              padding: "1rem 1rem",
              backgroundColor: "#fff",
              borderRadius: "7px",
              boxShadow: "0px 0px 20px grey",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", textAlign: "center" }}
            >
              Password Change
            </Typography>
            <TextField
              onChange={(e) => setChangePassword(e.target.value)}
              value={change_password}
              variant="outlined"
              sx={{ padding: "0.7rem 0" }}
              required
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              autoComplete="phoneNumber"
              autoFocus
              placeholder="Enter password"
              InputProps={{
                style: {
                  height: "50px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              onClick={() => handleChangePassword()}
              sx={{
                width: "100%",
                backgroundColor: "#2F93F6",
                color: "#fff",
                textTransform: "capitalize",
                padding: "0.6rem ",
              }}
            >
              Password Change
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PasswordChange;
