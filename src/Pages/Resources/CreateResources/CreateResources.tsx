import { Box, Button, Container, Typography } from "@mui/material";

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
          <Button sx={{color: '#fff' , backgroundColor: "#40BFC1" ,border: "1px solid #40BFC1", padding: '0.4rem 1rem' , textTransform: "capitalize" , "&:hover": {
            color: "#40BFC1",
            backgroundColor: "#fff",
            border: "1px solid #40BFC1"

          }}}>
            Resurs yuklash
          </Button>
        </Box>
        <Typography variant="h6" sx={{textAlign: 'center' , fontWeight: '600' , padding: '1rem 0'}}>Resurs yuklash </Typography>
      </Container>
    </Box>
  );
};

export default CreateResources;
