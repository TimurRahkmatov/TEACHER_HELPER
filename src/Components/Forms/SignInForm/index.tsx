import { AccountCircle } from "@mui/icons-material";

import { Box, Button, FormControl, FormLabel, InputAdornment, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("token" , "token"),
    navigate('/')
  }

  return (
    <Box>
      <FormControl
      component='form'
      onSubmit={handleLogin}
        sx={{ width: "100%", padding: "0.5rem 0", marginTop: "0.5rem" }}
      >
        <FormLabel
          sx={{
            marginTop: "0.7rem",
            marginBottom: "-0.5rem",
            color: "#000",
          }}
          htmlFor="phoneNumber"
        >
          E-mail or phone number
        </FormLabel>
        <TextField
          variant="outlined"
          sx={{ padding: "0.7rem 0" }}
          required
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          autoComplete="phoneNumber"
          autoFocus
          placeholder="Enter your phone or email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
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
              backgroundColor: '#fff',
              color: '#2F93F6',
              border: '1px solid #2F93F6'
            }
          }}
        >
          Login
        </Button>
        <Typography
          variant="body1"
          sx={{ color: "#009EF7", textAlign: "end", padding: "0.3rem 0" , "&:hover": {
            color: "#009cf75c",
            transition: "0.4s"
          } }}
        >
          Forgot Password?
        </Typography>
      </FormControl>
    </Box>
  );
};

export default SignInForm;
