import { ArrowBack } from "@mui/icons-material"
import { Box, Container, Typography } from "@mui/material"
import ResourcesButtons from "../../../Components/Buttons/Resources"
import ModeratorCard from "../../../Components/Cards/Resources/ModeratorCard"

const ResourcesModerator = () => {
  return (
    <Box sx={{padding: '2.5rem 0'}}>
      <Container>
        <Box
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" , }}
        >
          <ResourcesButtons />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
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
          <ArrowBack/>
          <Typography variant="body1" sx={{ color: "4F4F4F" , fontSize: '18px' }}>
            Moderatorni tanlang
          </Typography>
          <Typography>...</Typography>
        </Box>
          <ModeratorCard />
      </Container>
    </Box>
  )
}

export default ResourcesModerator