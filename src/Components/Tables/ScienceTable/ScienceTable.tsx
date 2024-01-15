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

const ScienceTable = () => {
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">#1</TableCell>
                <TableCell align="inherit" component="th" scope="row">
                  <Box>
                    <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                      {" "}
                      Старший учитель математики учитель математики Старший
                      учитель математики
                    </Typography>
                  </Box>
                  <Typography sx={{ textAlign: "start" }}>
                    Algebra 1*sinf
                  </Typography>
                </TableCell>
               
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScienceTable;
