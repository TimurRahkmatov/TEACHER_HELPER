import { Delete, RemoveRedEye, StickyNote2 } from "@mui/icons-material";
import {
  Box,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
} from "@mui/material";

const ResourcesModeratorTable = () => {
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
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
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
                <TableCell align="center">Fani</TableCell>
                <TableCell align="center">Sinfi</TableCell>
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
                  <TableCell align="center" component="th" scope="row">
                    Subject name
                  </TableCell>
                  <TableCell align="center">algebra</TableCell>
                  <TableCell align="center">1-sinf</TableCell>
                  <TableCell sx={{display: "flex" , alignItems: 'center' , justifyContent: 'center'}} align="center">
                    <RemoveRedEye />
                    <StickyNote2 />
                    <Delete />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
export default ResourcesModeratorTable;
