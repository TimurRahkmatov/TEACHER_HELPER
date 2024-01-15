import { Box, Container, Typography } from "@mui/material"
import ScienceTable from "../../../Components/Tables/ScienceTable"

const ScienceById = () => {
  return (
    <Box sx={{padding: '2rem 0' , backgroundColor: "#dcd8d841" , minHeight: "90vh"}}>
        <Container> 
            <Typography variant="h5" sx={{fontWeight: "600"}}>Tematic plan</Typography>
            <Typography variant="body1" sx={{fontWeight: '600'}}>Tematik plan haqida definition</Typography>
            <Typography variant="h5" sx={{fontWeight: '600' , textAlign: 'center' , marginTop :'1rem'}}>Mavzu bo’yicha resurslar</Typography>
            <ScienceTable />
        </Container>
    </Box>
  )
}

export default ScienceById