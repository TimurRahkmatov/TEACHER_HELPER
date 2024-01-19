import {FacebookRounded, Google } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { AuthorizationButton } from "../../Components/Buttons/Authorization";
import SignInForm from "../../Components/Forms/SignInForm";

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
              width: {lg: "530px" , md: "530px" , sm: "470px" , xs: "380px"},
              backgroundColor: "#fff",
              padding: "1.5rem 1.5rem",
              boxShadow: "0px 0px 20px #9c989838",
              borderRadius: "12px"
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" , fontWeight: "600"  }}>
              Sign In
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#31394D" }}
            >
              Let’s build something greate
            </Typography>
            <SignInForm />
            <Box sx={{display: "flex" , alignItems: 'center' , justifyContent: "space-between" , gap: "0.8rem" , flexWrap: "wrap"}}>
            <AuthorizationButton><Google /> Sign In with Google</AuthorizationButton>
            <AuthorizationButton><FacebookRounded sx={{color: "#2F93F6"}}/> Sign In with Facebook</AuthorizationButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
