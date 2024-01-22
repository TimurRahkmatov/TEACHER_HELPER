import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import { moderator_api } from "../../../Api/moderator.api";
import { toast } from "react-toastify";

interface ID {
  id: number;
}

const ResourceDelete = ({ id }: ID) => {
  const handleDelete = async (): Promise<void> => {
    try {
      const deleteConfirm = confirm("siz delete qilishni xohlaysizmi");
      if(deleteConfirm === true) {
          const { data } = await moderator_api.deleteResource(id);
          console.log(data);
          if (data.code === 200) {
            toast(data.message, { type: "success" });
          }
      }else {
        
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
