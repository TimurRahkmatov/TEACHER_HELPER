import { Box, InputLabel, MenuItem, Select } from "@mui/material";
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
    <Box >
      <InputLabel id="demo_class">Classes</InputLabel>
      <Select labelId="demo_class" sx={{width: '130px'}} >
        {state?.map((item: any) => (
          <MenuItem key={item?.id} value={item?.id}>
            {item?.class_name}
          </MenuItem>
        ))}
      </Select>
    </Box >
  );
};

export default ClassFilterMenu;
