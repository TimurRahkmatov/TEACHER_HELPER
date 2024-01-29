import { Box, Container, Typography } from "@mui/material";
import ResourceByIdCard from "../../../Components/Cards/Resources/ResourceByCard";

const ResourceById = () => {
  return (
    <Box sx={{ padding: "2rem 0" }}>
      <Container>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          Resurs
        </Typography>
        <Typography sx={{ fontWeight: "600" }}>
          Resurs haqida to'liq ma'lumot
        </Typography>
        <ResourceByIdCard />
      </Container>
    </Box>
  );
};

export default ResourceById;
