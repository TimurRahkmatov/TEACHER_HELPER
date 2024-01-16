import {
  BookOutlined,
  KeyboardArrowDown,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const TematicPlanFilter = () => {

  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "1rem 1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            justifyContent: "space-between",
            alignItems : "center"

          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <BookOutlined />
            <Typography>Subject</Typography>
          </Box>
          <KeyboardArrowDown
            
          />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignItems : "center"
            
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <LocationOnOutlined />
            <Typography>Class</Typography>
          </Box>
          <KeyboardArrowDown />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignItems : "center"

          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <LocationOnOutlined />
            <Typography>Quarter</Typography>
          </Box>
          <KeyboardArrowDown />
        </Box>

        <Box
          sx={{
            width: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              padding: "0.2rem 2rem",
              backgroundColor: "#40BFC1",
              textTransform: "capitalize",
              color: "#fff",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TematicPlanFilter;
