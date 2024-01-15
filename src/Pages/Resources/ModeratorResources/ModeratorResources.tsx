import { Box, Button, Container, Typography } from "@mui/material";
import TematicPlanFilter from "../../../Components/Filter/TematicPlan";
import ResourcesModeratorTable from "../../../Components/Tables/Resources/ResourcesModeratorTable";

const ModeratorResources = () => {
  return (
    <Box
      sx={{
        padding: "2rem 0",
        backgroundColor: "#dcd8d841",
        minHeight: "90vh",
      }}
    >
      <Container>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          Resurslar
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            Resurs haqida ma’lumot
          </Typography>
          <Button
            sx={{
              padding: "0.3rem 1rem",
              borderRadius: "10px",
              
              textTransform: "capitalize",
              backgroundColor: "#40BFC1",
              color: "#fff"
            }}
          >
            Resurs yuklash
          </Button>
        </Box>
        <TematicPlanFilter />
        <ResourcesModeratorTable />
      </Container>
    </Box>
  );
};

export default ModeratorResources;
