import { ArrowBack } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import SciencesCard from "../../Components/Cards/Resources/SciencesCard";
import ResourcesButtons from "../../Components/Buttons/Resources";


const Resources = () => {
  return (
    <Box sx={{ padding: "2.5rem 0" }}>
      <Container>
        <Box
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <ResourcesButtons />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "600" , marginTop: {lg: 0 , md: '0' , sm: '1.4rem' , xs: "1.8rem"} }}>
          Resurslar
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Resurslar haqida ma’lumot
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 0",
            marginTop: "1rem",
          }}
        >
          <ArrowBack />
          <Typography variant="body1" sx={{ color: "4F4F4F" }}>
            Bironta fan birlashmasini tanlang
          </Typography>
          <Typography>...</Typography>
        </Box>
        <SciencesCard/>
      </Container>
    </Box>
  );
};

export default Resources;
