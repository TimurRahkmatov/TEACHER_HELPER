import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CreateResourcesForm = () => {
  return (
    <Box>
      <FormControl
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
          <Box sx={{ width: "50%" , display: "flex" , flexDirection: "column" }}>
            <FormLabel>Fan</FormLabel>
            <Select style={{height: "40px" , width: "100%"}}  >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            
          </Box>
          <Box sx={{ width: "50%" }}>
            <FormLabel id="sinf">Sinf</FormLabel>
            <Select style={{height: "40px" , width: "100%"}} name="sinf" id="sinf" >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
          <Box sx={{ width: "50%" }}>
            <FormLabel>Mavzu</FormLabel>
            <Select style={{height: "40px" , width: "100%"}}  >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
          <Box sx={{ width: "50%" }}>
            <FormLabel>Resurs nomi</FormLabel>
            <TextField
              InputProps={{ style: { height: "40px" } }}
              sx={{ width: "100%" }}
              placeholder="Resurs nomini kiriting"
            />
          </Box>
        </Box>
        <Box>
          <FormLabel>Fayl tanlang</FormLabel>
          <TextField
            sx={{ width: "100%" }}
            InputProps={{ style: { height: "40px" } }}
            placeholder="Faylni yuklash uchun faylni tanlang"
          />
        </Box>
        <Button
          sx={{
            width: "100%",
            color: "#FFF",
            backgroundColor: "#40BFC1",
            textTransform: "capitalize",
            border: "1px solid #40BFC1",
            padding: "0.6rem 0",
            "&:hover": {
              color: "#40BFC1",
              backgroundColor: "#FFF",
              border: "1px solid #40BFC1",
            },
          }}
        >
          Create Resources
        </Button>
      </FormControl>
    </Box>
  );
};

export default CreateResourcesForm;
