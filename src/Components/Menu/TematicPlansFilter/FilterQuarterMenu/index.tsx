import { KeyboardArrowDown, QueryStats } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";

const QuarterFilterMenu = () => {
  const [quarterState, setQuarterState] = React.useState<null | HTMLElement>(
    null
  );
  const openQuarter = Boolean(quarterState);
  const handleQuarterClick = (event: React.MouseEvent<HTMLElement>) => {
    setQuarterState(event.currentTarget);
  };

  const handleClose = () => {
    setQuarterState(null)
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
        id="demo_quarter_button"
        aria-controls={openQuarter ? "demo_quarter_menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openQuarter ? "true" : undefined}
        onClick={handleQuarterClick}
      >
        <Box sx={{ display: "flex", gap: "0.3rem" }}>
          <QueryStats />
          <Typography>Quarter</Typography>
        </Box>
        <KeyboardArrowDown />
      </Button>
      <Menu
        id="demo_quarter_menu"
        aria-labelledby="demo_quarter_button"
        anchorEl={quarterState}
        open={openQuarter}
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
        <MenuItem onClick={handleClose}>1-chorak</MenuItem>
        <MenuItem onClick={handleClose}>2-chorak</MenuItem>
        <MenuItem onClick={handleClose}>3-chorak</MenuItem>
        <MenuItem onClick={handleClose}>4-chorak</MenuItem>
      </Menu>
    </Box>
  );
};

export default QuarterFilterMenu;
