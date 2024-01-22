import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import { moderator_api } from "../../../Api/moderator.api";
import { toast } from "react-toastify";

interface ID {
  id: number;
}

const ResourceDelete = ({ id }: ID) => {
  console.log(id);

  const handleDelete = async (): Promise<void> => {
    try {
      const { data } = await moderator_api.deleteResource(id);
      console.log(data);
      if(data.code === 200) {
        toast(data.message , {type: "success"})
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box component="div" onClick={() => handleDelete()}>
      <Delete />
    </Box>
  );
};

export default ResourceDelete;
