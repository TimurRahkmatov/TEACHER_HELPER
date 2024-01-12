import { Box, Container, Typography } from "@mui/material";
import { AuthorizationButton } from "../../Components/Buttons/Authorization";
import { Apple, Google } from "@mui/icons-material";
import SignUpForm from "../../Components/Forms/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Box sx={{ width: "100%" , display: 'flex' , alignItems: 'center' , justifyContent: 'center' , height: '100vh' , }}>
          <Box
            sx={{
              width: "500px",
              padding: "1.5rem",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 20px #9c989838",
              borderRadius: '13px'
            }}
          >
            <Typography sx={{ textAlign: "center" , fontWeight: "600" , fontSize: '1.5rem' }} variant="h6">
              Sign up for an account
            </Typography>
            <Typography
              sx={{ textAlign: "center", color: "#A1A5B7" , padding: "0.3rem 0" }}
              variant="body1"
            >
              Your social campaigns
            </Typography> 
            <Box sx={{ display: "flex", justifyContent: "space-between" , padding: '0.5rem 0' , gap: '0.5rem' }}>
              <AuthorizationButton>
                <Google /> Sign up with Google
              </AuthorizationButton>
              <AuthorizationButton>
                <Apple /> Sign up with Apple
              </AuthorizationButton>
            </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.4rem",
              marginTop: '0.4rem'
              
            }}
          >
            <Box
              sx={{ width: "37%", height: "1px", backgroundColor: "#EFF2F5" }}
            ></Box>
            <Typography sx={{fontSize: '15px' , color: "#A1A5B7"}} variant="body2">Or with email</Typography>
            <Box
              sx={{ width: "37%", height: "1px", backgroundColor: "#EFF2F5" }}
            ></Box>
          </Box>
          <SignUpForm />
          <Typography variant="body1" sx={{display: "flex" , alignItems: 'center' , justifyContent: 'center' , gap: '0.5rem'}}>
          Already have an Account? <Link className="SignInlink" to='/signin'>Sign In</Link>
          </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
