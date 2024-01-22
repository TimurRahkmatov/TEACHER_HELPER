import { Box, Container, Typography } from "@mui/material"
import ResourcesModeratorTable from "../../../Components/Tables/Resources/ResourcesModeratorTable"


const ModeratorByIdResource = () => {
  return (
    <Box sx={{padding: '2rem 0'}}>
        <Container>
            <Typography sx={{fontWeight: "600" , fontSize: '20px'}}>Resurs haqida to'liq ma'lumot </Typography>
            <ResourcesModeratorTable />
        </Container>
    </Box>
  )
}

export default ModeratorByIdResource