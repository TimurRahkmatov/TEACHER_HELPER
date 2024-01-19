import { Box, Container, Typography } from "@mui/material";
import CreateResourcesForm from "../../../Components/Forms/CreateResources";

const CreateResources = () => {
  return (
    <Box sx={{padding: '3rem 0'}}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{fontWeight: "600"}}>Resurs yuklash </Typography>
            <Typography variant="body1" sx={{fontWeight: "600" , fontSize: "16px"}}>Resurs haqida ma’lumot</Typography>
          </Box>
          
        </Box>
        <Typography variant="h6" sx={{textAlign: 'center' , fontWeight: '600' , padding: '1rem 0'}}>Resurs yuklash </Typography>
        <CreateResourcesForm />
      </Container>
    </Box>
  );
};

export default CreateResources;
