import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const TermsOfUseReg = () => {
  return (
    <Box sx={{ padding: "4rem 0" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "70%" }}>
          <Box>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to="/signup"
            >
              {" "}
              <Button
                sx={{
                  margin: "1rem 0",
                  display: "flex",
                  gap: "0.4rem",
                  alignItems: "center",
                }}
              >
                <ArrowBack /> Back to register
              </Button>
            </Link>
            <Typography variant="h4">Register Terms of service</Typography>
            <Typography variant="body1">
              Please read the following Terms of service, and understand they
              are a legally binding document. We encourage you to review the
              contents carefully in their entirety and to seek legal counsel if
              you have any concerns. Please note that your use of our Website
              constitutes your acceptance of these Terms of service and your
              agreement to be bound by them.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2.5rem" }}>
            <Typography variant="h5">1. Definitions</Typography>
            <List>
              <ListItem sx={{ listStyle: "outside" }}>
                "MUI" means Material-UI SAS, a legal entity located at 128 Rue
                La Boétie 75008 Paris, France.
              </ListItem>
              <ListItem>
                "MUI" means Material-UI SAS, a legal entity located at 128 Rue
                La Boétie 75008 Paris, France.
              </ListItem>
              <ListItem>
                "MUI" means Material-UI SAS, a legal entity located at 128 Rue
                La Boétie 75008 Paris, France.
              </ListItem>
            </List>
          </Box>
          <Box sx={{ marginTop: "2.5rem" }}>
            <Typography variant="h5">2. Overview</Typography>
            <Typography variant="body1">
              MUI Store operates a global content licensing platform. MUI
              Store's customers pay a fee to license from its platform Content
              submitted by contributors. Contributors get paid a commission
              every time their Content is licensed.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsOfUseReg;
