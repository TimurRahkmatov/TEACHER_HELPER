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
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { EditTopisc } from "../../../store/slices/topics";
import { moderator_api } from "../../../Api/moderator.api";
import { toast } from "react-toastify";
import { CreateResource } from "../../../store/slices/moderator";

const CreateResourcesForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.topic.topics);
  const [topic, setTopic] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [file, setFile]: any = useState(null);

  const handleCreateResources = async (e: any): Promise<void> => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("topic_id", topic);
    formdata.append("resource_name", resourceName);
    formdata.append("files[]", file);
    try {
      const { data } = await moderator_api.createResource(formdata);
      if (data.code === 200) {
        dispatch(CreateResource(data.data))
        toast(data.message, { type: "success" });
      }
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

  interface IAdd {
    class: string;
    quarter: string;
    science: string;
  }
  interface Iitem {
    id: number;
    topic_name: string;
    add: IAdd;
  }

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
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <FormLabel id="Mavzu">Mavzu</FormLabel>
            <Select
              placeholder="Mavzuni tanlang"
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
              sx={{ height: "40px" }}
              labelId="Mavzu"
              id="topicSelect"
            >
              {state?.map((item: Iitem) => (
                <MenuItem key={item?.id} value={item?.id}>
                  {item?.topic_name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
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
            onChange={(e: any) => setFile(e.target.files[0])}
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
