import { Box, Container, Typography } from "@mui/material"
import ScienceTable from "../../../Components/Tables/ScienceTable"
import FilesCard from "../../../Components/Cards/Resources/FilesCard"
import Resources from './../index';

const ScienceById = () => {
  return (
    <Box sx={{padding: '2rem 0' , backgroundColor: "#dcd8d841" , minHeight: "90vh"}}>
        <Container> 
            <Typography variant="h5" sx={{fontWeight: "600"}}>Resources</Typography>
            <Typography variant="body1" sx={{fontWeight: '600'}}>resurslarni yuklab oling</Typography>
            <Typography variant="h5" sx={{fontWeight: '600' , textAlign: 'center' , marginTop :'1rem'}}>Mavzu bo’yicha resurslar</Typography>
            <ScienceTable />
            <FilesCard />
        </Container>
    </Box>
  )
}

export default ScienceById