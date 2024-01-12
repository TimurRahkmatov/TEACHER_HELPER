import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const SignIn = () => {
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
              width: "360px",
              backgroundColor: "#fff",
              padding: "1rem 1rem",
              boxShadow: "0px 0px 20px #9c989838",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Sign In
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "#31394D" }}
            >
              Let’s build something greate
            </Typography>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel>E-mail or phone number</FormLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                autoComplete="phoneNumber"
                autoFocus
                placeholder="Phone Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
