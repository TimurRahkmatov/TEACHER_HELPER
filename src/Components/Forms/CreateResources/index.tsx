import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { base_api } from "../../../Api/base.api";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { EditTopisc } from "../../../store/slices/topics";

const CreateResourcesForm = () => {
  const dispatch = useAppDispatch();
  // const state = useAppSelector((state) => state.topic);

  const getAllTopics = async () => {
    try {
      const { data } = await base_api.findAllTopics();
      if (data?.code === 200) {
        dispatch(EditTopisc(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTopics();
  }, []);

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
          <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
            <FormLabel>Fan</FormLabel>
            <Select
              style={{ height: "40px", width: "100%" }}
              placeholder="Fani tanlang"
            >
              <MenuItem value={10}>Ingliz tili</MenuItem>
              <MenuItem value={20}>Algebra</MenuItem>
              <MenuItem value={30}>Geometriya</MenuItem>
              <MenuItem value={40}>Fizika</MenuItem>
              <MenuItem value={50}>Kimyo</MenuItem>
              <MenuItem value={60}>Tarix</MenuItem>
              <MenuItem value={70}>Rus tili</MenuItem>
            </Select>
          </Box>
          <Box sx={{ width: "50%" }}>
            <FormLabel id="sinf">Sinf</FormLabel>
            
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
          <Box sx={{ width: "50%" }}>
            <FormLabel>Mavzu</FormLabel>
            <Select
              style={{ height: "40px", width: "100%" }}
              placeholder="Mavzuni nomini yozing"
              labelId="monday_select"
            >
              
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
            type="file"
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
