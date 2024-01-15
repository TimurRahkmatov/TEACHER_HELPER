import {
  Airplay,
  Cloud,
  Description,
  Tv,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const ModeratorTable = () => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ];

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            border: "none",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Mavzu nomi</TableCell>
              <TableCell align="center">Resurslar turlari</TableCell>
              <TableCell align="center">Resurslar soni</TableCell>
              <TableCell align="center">Harakatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">1</TableCell>
                <TableCell align="inherit" component="th" scope="row">
                  <Box>
                    <Typography sx={{fontSize: "18px" , fontWeight: "600"}} >
                      {" "}
                      Старший учитель математики учитель математики Старший
                      учитель математики
                    </Typography>
                  </Box>
                    <Typography sx={{textAlign: "start"}}>Algebra 1*sinf</Typography>
                </TableCell>
                <TableCell align="center">
                  <Box>
                    <Description /> <Airplay />{" "}
                  </Box>
                  <Box>
                    <Tv /> <Cloud />
                  </Box>
                </TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  align="center"
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "#40BFC1",
                        color: "#fff",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <Visibility />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ModeratorTable;
