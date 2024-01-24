import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { moderator_api } from "../../../Api/moderator.api";
import { base_api } from "../../../Api/base.api";
import { EditTopisc } from "../../../store/slices/topics";
import { useAppDispatch, useAppSelector } from "../../../store";
import { toast } from "react-toastify";

const ResourceEditModal = ({ setOpen, open, id }: any) => {
  const dispatch = useAppDispatch();
  const [topic, setTopic] = useState("");
  const state = useAppSelector((state) => state.topic.topics);
  const [resourceName, setResourceName] = useState("");
  const handleClose = () => setOpen(false);

  const handleEditResource = async (): Promise<void> => {
    try {
      const { data } = await moderator_api.editResource(id, {
        resource_name: resourceName,
        topic_id: +topic,
      });
      console.log(data);
      if (data.code === 200) {
        toast(data.message, { type: "info" });
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

  useEffect(() => {
    getAllTopics();
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "1px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Resource
            </Typography>
            <FormControl sx={{ width: "100%", marginTop: "0.5rem" }}>
              {/* <label style={{ marginTop: "1.5rem" }} htmlFor="topic">
                Mavzu
              </label>
              <select
                
               
                style={{ width: "100%", padding: "0.6rem" }}
                name=""
                id="topic"
              >
                {state.map((item: any) => (
                  <option key={item.id} value={item.id}>
                    {item.topic_name}
                  </option>
                ))}
              </select> */}
              <FormLabel htmlFor="topicsSelect">Mavzu</FormLabel>
              <Select
                style={{height: '40px'}}
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
                placeholder="Mavzuni tanlang"
                labelId="Topics"
                id="topicsSelect"
              >
                {state?.map((item : any) => (
                  <MenuItem key={item?.id} value={item?.id}>
                    {item?.topic_name}
                  </MenuItem>
                ))}
              </Select>

              <Typography variant="body2" sx={{ marginTop: "1rem" }}>
                type the name of the resource you want to change
              </Typography>
              <TextField
                value={resourceName}
                onChange={(e) => setResourceName(e.target.value)}
                placeholder="Write resource name"
                sx={{ width: "100%", marginTop: "0.2rem" }}
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
              <Button
                onClick={() => handleEditResource()}
                sx={{
                  width: "100%",
                  marginTop: "1.5rem",
                  border: "1px solid blue",
                }}
              >
                Edit Resource
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ResourceEditModal;
