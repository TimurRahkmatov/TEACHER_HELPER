import { Box, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { base_api } from "../../../../Api/base.api";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { EditClass } from "../../../../store/slices/class";

const ClassFilterMenu = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.class.classes);

  const getAllClasses = async (): Promise<void> => {
    try {
      const { data } = await base_api.findAllClasses();
      if (data.code === 200) {
        dispatch(EditClass(data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllClasses();
  }, []);
  return (
    <Box>
      <Select id="classSelect" placeholder="Sinfni tanlang">
        {state?.map((item: any) => (
          <MenuItem key={item?.id} value={item?.id}>
            {item?.class_name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ClassFilterMenu;
