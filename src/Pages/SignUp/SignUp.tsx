import { Box, Container, Typography } from "@mui/material";
import { AuthorizationButton } from "../../Components/Buttons/Authorization";
import { Apple, Google } from "@mui/icons-material";
import SignUpForm from "../../Components/Forms/SignUpForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../Components/Spinner";

const SignUp = () => {
  const [loading, setLoading]:[boolean , React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  return(
    <Box sx={{ width: "100%" }}>
      {loading === true ? (<Spinner />) : ("")}
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: { md: "500px", lg: "520px", sm: "490px", xl: "430px" },
              padding: "1.5rem",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 20px #9c989838",
              borderRadius: "13px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
              variant="h6"
            >
              Sign up for an account
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#A1A5B7",
                padding: "0.3rem 0",
              }}
              variant="body1"
            >
              Your social campaigns
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem 0",
                gap: "0.5rem",
                flexDirection: { md: "inherit", sm: "inherit", xs: "column" },
              }}
            >
              <AuthorizationButton>
                <Google /> Sign up with Google
              </AuthorizationButton>
              <AuthorizationButton>
                <Apple /> Sign up with Apple
              </AuthorizationButton>
            </Box>
            <SignUpForm loading={loading} setLoading={setLoading} />
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              Already have an Account?{" "}
              <Link className="SignInlink" to="/signin">
                Sign In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
