import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import ClassFilterMenu from "../../Menu/TematicPlansFilter/FilterClassMenu";
import { base_api } from "../../../Api/base.api";
import { useAppDispatch, useAppSelector } from "../../../store";
import { EditScience } from "../../../store/slices/science";

const TematicPlanFilter = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.science.sciences);

  const getAllSubjects = async (): Promise<void> => {
    try {
      const { data } = await base_api.findAllSciences();
      if (data.code === 200) {
        dispatch(EditScience(data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSubjects();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        display: "flex",
        justifyContent: "start",
        gap: "1.3rem",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex" , alignItems: "center" , gap: "6rem" }}>
        <Box>
          <InputLabel id="demo_subjects">Subjects</InputLabel>
          <Select labelId="demo_subjects" id="demo-simple"  sx={{minWidth: '130px'}}>
            {state?.map((item: any) => (
              <MenuItem key={item?.id} value={item?.id}>
                {item?.science_name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <ClassFilterMenu />
      </Box>
    </Box>
  );
};

export default TematicPlanFilter;
