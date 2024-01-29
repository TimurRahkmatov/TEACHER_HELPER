import { AccountCircle } from "@mui/icons-material";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { auth_api } from "../../../Api/auth.api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../store";
import { registerAuth } from "../../../store/slices/auth";
import { InputMask } from "@react-input/mask";

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");


  const PhoneNumber = `${username.slice(0,3)}${username.slice(5,7)}${username.slice(9,12)}${username.slice(13,15)}${username.slice(16,18)}`

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await auth_api.login({
        username: PhoneNumber,
        password: password,
      });
      if (data?.code === 200) {
        localStorage.setItem("token", data?.data.token);
        toast(data?.message, { type: "success" });
        dispatch(registerAuth({ username: PhoneNumber }));
        navigate("/");
      }
    } catch (error: any) {
      if (error?.response?.data.message) {
        toast(error?.response?.data.message, { type: "error" });
      }
      if (error?.response?.data?.data?.password) {
        toast(error?.response?.data.data.password, { type: "warning" });
      }
      console.log(error);
    }
  };

  return (
    <Box>
      <FormControl
        component="form"
        onSubmit={handleLogin}
        sx={{ width: "100%", padding: "0.5rem 0", marginTop: "0.5rem" }}
      >
        <FormLabel
          sx={{
            marginTop: "0.7rem",
            marginBottom: "-0.5rem",
            color: "#000",
          }}
          htmlFor="phone"
        >
          Only phone number
        </FormLabel>
        <InputMask
          id="phone"
          placeholder="Your phone number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            height: "54px",
            marginTop: "0.6rem",
            fontSize: "18px",
            paddingLeft: "15px",
          }}
          mask="998 (__) ___-__-__"
          replacement={{ _: /\d/ }}
        />
        <FormLabel
          sx={{
            marginTop: "0.7rem",
            marginBottom: "-0.5rem",
            color: "#000",
          }}
          htmlFor="phoneNumber"
        >
          Password
        </FormLabel>
        <TextField
          onChange={(e) => setPassowrd(e.target.value)}
          value={password}
          variant="outlined"
          sx={{ padding: "0.7rem 0" }}
          required
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          autoComplete="phoneNumber"
          autoFocus
          placeholder="Enter your password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          sx={{
            padding: "0.7rem 0",
            textAlign: "center",
            width: "100%",
            backgroundColor: "#2F93F6",
            color: "#fff",
            textTransform: "none",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#2F93F6",
              border: "1px solid #2F93F6",
            },
          }}
        >
          Login
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#009EF7",
                textAlign: "start",
                padding: "0.3rem 0",
                "&:hover": {
                  color: "#009cf75c",
                  transition: "0.4s",
                },
              }}
            >
              Do you not have an account ?
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/passwordchange">
            <Typography
              variant="body1"
              sx={{
                color: "#009EF7",
                textAlign: "end",
                padding: "0.3rem 0",
                "&:hover": {
                  color: "#009cf75c",
                  transition: "0.4s",
                },
              }}
            >
              Forgot Password?
            </Typography>
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SignInForm;
