import { Bookmark, KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Typography } from "antd";
import React, { useEffect } from "react";
import ClassFilterMenu from "../../Menu/TematicPlansFilter/FilterClassMenu";
import QuarterFilterMenu from "../../Menu/TematicPlansFilter/FilterQuarterMenu";
import { base_api } from "../../../Api/base.api";
import { useAppDispatch, useAppSelector } from "../../../store";
import { EditScience } from "../../../store/slices/science";

const TematicPlanFilter = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.science.sciences)  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const getAllSubjects = async (): Promise<void> => {
    try {
      const { data } = await base_api.findAllSciences();
      if(data.code === 200) {
        dispatch(EditScience(data.data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSubjects()
  } , [])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          id="demo_subject_button"
          aria-controls={open ? "demo-subject-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Box sx={{ display: "flex", gap: "0.3rem" }}>
            <Bookmark />
            <Typography>Subject</Typography>
          </Box>
          <KeyboardArrowDown />
        </Button>
        <Menu
          id="demo-subject-menu"
          aria-labelledby="demo_subject_button"
          anchorEl={anchorEl}
          open={open}
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
            <MenuItem key={item.id} onClick={handleClose}>{item.science_name}</MenuItem>
          ))}
         
        </Menu>
      </Box>
      <ClassFilterMenu />
      <QuarterFilterMenu />
    </Box>
  );
};

export default TematicPlanFilter;
