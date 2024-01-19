import { KeyboardArrowDown, LocationOff } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";

const ClassFilterMenu = () => {
  const [classState, setClassState] = React.useState<null | HTMLElement>(null);
  const openClass = Boolean(classState);
  const handleClassClick = (event: React.MouseEvent<HTMLElement>) => {
    setClassState(event.currentTarget);
  };


  const handleClose = () => {
    setClassState(null)
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
          color: "grey"

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
        <MenuItem onClick={handleClose}>1-sinf</MenuItem>
        <MenuItem onClick={handleClose}>2-sinf</MenuItem>
        <MenuItem onClick={handleClose}>3-sinf</MenuItem>
        <MenuItem onClick={handleClose}>4-sinf</MenuItem>
        <MenuItem onClick={handleClose}>5-sinf</MenuItem>
        <MenuItem onClick={handleClose}>6-sinf</MenuItem>
        <MenuItem onClick={handleClose}>7-sinf</MenuItem>
      </Menu>
    </Box>
  );
};

export default ClassFilterMenu;
