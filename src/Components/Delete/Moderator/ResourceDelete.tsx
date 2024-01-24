import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import { moderator_api } from "../../../Api/moderator.api";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../store";
import { DeleteResource } from "../../../store/slices/moderator";

interface ID {
  id: number;
}

const ResourceDelete = ({ id }: ID) => {

  const dispatch = useAppDispatch()

  const handleDelete = async (): Promise<void> => {
    try {
      const deleteConfirm = confirm("siz delete qilishni xohlaysizmi");
      if(deleteConfirm === true) {
          const { data } = await moderator_api.deleteResource(id);
          if (data.code === 200) {
            dispatch(DeleteResource(id))
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
