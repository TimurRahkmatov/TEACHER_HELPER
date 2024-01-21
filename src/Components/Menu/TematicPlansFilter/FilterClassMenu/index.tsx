import { KeyboardArrowDown, LocationOff } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { base_api } from "../../../../Api/base.api";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { EditClass } from "../../../../store/slices/class";

const ClassFilterMenu = () => {
  const dispatch = useAppDispatch();
  const [classState, setClassState] = React.useState<null | HTMLElement>(null);
  const state = useAppSelector((state) => state.class.classes)
  
  const openClass = Boolean(classState);

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

  const handleClassClick = (event: React.MouseEvent<HTMLElement>) => {
    setClassState(event.currentTarget);
  };

  const handleClose = () => {
    setClassState(null);
  };
  return (
    <Box>
      <Button
        sx={{
          textTransform: "capitalize",
          border: "1px solid grey",
          padding: "0.5rem 0.5rem",
          width: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "grey",
        }}
        id="demo_class_button"
        aria-controls={openClass ? "demo_class_menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openClass ? "true" : undefined}
        onClick={handleClassClick}
      >
        <Box sx={{ display: "flex", gap: "0.3rem" }}>
          <LocationOff />
          <Typography>Class</Typography>
        </Box>
        <KeyboardArrowDown />
      </Button>
      <Menu
        id="demo_class_menu"
        aria-labelledby="demo_class_button"
        anchorEl={classState}
        open={openClass}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {state.map((item:any) => (
          <MenuItem key={item.id} onClick={handleClose}>{item.class_name}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ClassFilterMenu;
