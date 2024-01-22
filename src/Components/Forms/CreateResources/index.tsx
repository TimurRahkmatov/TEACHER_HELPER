import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { base_api } from "../../../Api/base.api";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { EditTopisc } from "../../../store/slices/topics";
import { moderator_api } from "../../../Api/moderator.api";

const CreateResourcesForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.topic.topics);
  const [topic, setTopic] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [file, setFile] = useState("");

  const handleFileSelected = (e: any): void => {
    const files:any = Array.from(e.target.files);
    setFile(files);
  };

  console.log("file" , file);
  

  const handleCreateResources = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      const { data } = await moderator_api.createResource({
        topic_id: +topic,
        resource_name: resourceName,
        "files[]": file[0],
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllTopics = async (): Promise<void> => {
    try {
      const { data } = await base_api.findAllTopics();
      if (data?.code === 200) {
        dispatch(EditTopisc(data.data));
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
        component="form"
        onSubmit={handleCreateResources}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
          <Box sx={{ width: "50%" }}>
            <label htmlFor="topic">Mavzu</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{ width: "100%", padding: "0.6rem" }}
              name=""
              id="topic"
            >
              {state.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.topic_name}
                </option>
              ))}
            </select>
          </Box>
          <Box sx={{ width: "50%" }}>
            <FormLabel>Resurs nomi</FormLabel>
            <TextField
              onChange={(e) => setResourceName(e.target.value)}
              value={resourceName}
              InputProps={{ style: { height: "40px" } }}
              sx={{ width: "100%" }}
              placeholder="Resurs nomini kiriting"
            />
          </Box>
        </Box>
        <Box>
          <FormLabel>Fayl tanlang</FormLabel>
          <TextField
            onChange={handleFileSelected}
            type="file"
            sx={{ width: "100%" }}
            InputProps={{ style: { height: "40px" } }}
            placeholder="Faylni yuklash uchun faylni tanlang"
          />
        </Box>
        <Button
          type="submit"
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
