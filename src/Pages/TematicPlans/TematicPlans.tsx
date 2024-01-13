import { Box, Container, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// const table = [
//   {
//     id: "#1",
//     mavzu: "Subject Number",
//     soat: "2soat",
//     choragi: "1 chorak",
//     fan: "Algebra",
//     Sinfi: "6*sinf",
//   },
//   {
//     id: "#1",
//     mavzu: "Subjectas Number",
//     soat: "2soat",
//     choragi: "1 chorak",
//     fan: "Algebra",
//     Sinfi: "6*sinf",
//   },
//   {
//     id: "#1",
//     mavzu: "Subject Number",
//     soat: "2soat",
//     choragi: "1 chorak",
//     fan: "Algebra",
//     Sinfi: "6*sinf",
//   },
//   {
//     id: "#1",
//     mavzu: "Subject Number",
//     soat: "2soat",
//     choragi: "1 chorak",
//     fan: "Algebra",
//     Sinfi: "6*sinf",
//   },
//   {
//     id: "#1",
//     mavzu: "Subject Number",
//     soat: "2soat",
//     choragi: "1 chorak",
//     fan: "Algebra",
//     Sinfi: "6*sinf",
//   },
// ];

// const title = [
//   {
//     id: "#",
//     mavzu: "Mavzu nomi",
//     soat: "Soati",
//     chorak: "1 chorak",
//     fan: "Algebra",
//     sinf: "Sinfi",
//   },
// ];

const TematicPlans = () => {
  return (
    <Box
      sx={{
        padding: "2rem 0",
        backgroundColor: "#dcd8d841",
        minHeight: "90vh",
      }}
    >
      <Container>
        <Box>
          <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: "600" }}>
            Tematic plan
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "17px", fontWeight: "600", padding: "0.2rem 0" }}
          >
            Tematik plan haqida definition
          </Typography>
          
        </Box>
      </Container>
    </Box>
  );
};

export default TematicPlans;
