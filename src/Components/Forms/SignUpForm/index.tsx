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
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {

  const navigate = useNavigate()

  const handleRegister = () => {
    localStorage.setItem("token" , "token"),
    navigate('/')
  }


  return (
    <Box sx={{marginTop: '0.3rem'}}>
      <FormControl
      component='form'
      onSubmit={handleRegister}
        sx={{ width: "100%", padding: "0.5rem 0" }}
      >
        <FormLabel
          sx={{
            marginTop: "0.7rem",
            marginBottom: "-0.5rem",
            color: "#000",
          }}
          htmlFor="email"
        >
          E-mail or phone number
        </FormLabel>
        <TextField
          variant="outlined"
          sx={{ padding: "0.7rem 0" }}
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="phoneNumber"
          autoFocus
          placeholder="Email"
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
          htmlFor="password"
        >
          Password
        </FormLabel>
        <TextField
          variant="outlined"
          sx={{ padding: "0.7rem 0" }}
          required
          fullWidth
          id="password"
          name="password"
          autoComplete="phoneNumber"
          autoFocus
          placeholder="Password"
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
          htmlFor="reapetPassword"
        >
          Repeat Password
        </FormLabel>
        <TextField
          variant="outlined"
          sx={{ padding: "0.7rem 0" }}
          required
          fullWidth
          id="reapetPassword"
          name="reapetPassword"
          autoComplete="phoneNumber"
          autoFocus
          placeholder="Repeat Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Button
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
          Sign Up
        </Button>
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
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
