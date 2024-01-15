import { Box, Button, Container, Typography } from "@mui/material";
import ModeratorTable from "../../../Components/Tables/ModeratorTable";

const ModeratorById = () => {
  return (
    <Box
      sx={{
        padding: "2rem 0",
        backgroundColor: "#dcd8d841",
        minHeight: "90vh",
      }}
    >
      <Container>
        <Typography sx={{ fontWeight: "600" }} variant="h5">
          Resurslar
        </Typography>
        <Typography sx={{ fontWeight: "600" }}>
          Tematik plan haqida definition
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "end", marginTop: "0.5rem" }}
        >
          <Box
            sx={{
              width: "373px",
              backgroundColor: "#fff",
              borderRadius: "28px",
              display: "flex",
              justifyContent: "center",
              border: "1px solid #40BFC1",
            }}
          >
            <Button
              sx={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                borderRadius: "20px",
                textTransform: "capitalize",
                color: "#40BFC1",
                "&:hover": {
                    backgroundColor: "#40BFC1",
                    color: "#fff"
                }
              }}
            >
              1-chorak
            </Button>
            <Button
              sx={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                borderRadius: "20px",
                textTransform: "capitalize",
                color: "#40BFC1",
                "&:hover": {
                    backgroundColor: "#40BFC1",
                    color: "#fff"
                }
              }}
            >
              2-chorak
            </Button>
            <Button
              sx={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                borderRadius: "20px",
                textTransform: "capitalize",
                color: "#40BFC1",
                "&:hover": {
                    backgroundColor: "#40BFC1",
                    color: "#fff"
                }
              }}
            >
              3-chorak
            </Button>
            <Button
              sx={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                borderRadius: "20px",
                textTransform: "capitalize",
                color: "#40BFC1",
                "&:hover": {
                    backgroundColor: "#40BFC1",
                    color: "#fff"
                }
              }}
            >
              4-chorak
            </Button>
          </Box>
          
        </Box>
        <ModeratorTable />
      </Container>
    </Box>
  );
};

export default ModeratorById;
