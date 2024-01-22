import { RemoveRedEye, StickyNote2 } from "@mui/icons-material";
import {
  Box,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Button,
} from "@mui/material";
import { moderator_api } from "../../../Api/moderator.api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ResourceDelete from "../../Delete/Moderator";
import ResourceEditModal from "../../Modals/Moderator/ResourceEditModal";

const ResourcesModeratorTable = () => {
  const { id }: any = useParams();
  const [open, setOpen] = useState(false);

  const [data, setData]: any = useState({});

  const getByIdResource = async (): Promise<void> => {
    try {
      const { data } = await moderator_api.getByIdRerource(+id);
      if (data.code === 200) {
        setData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getByIdResource();
  }, []);

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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{data?.id}</TableCell>
              <TableCell align="center" component="th" scope="row">
                {data?.topic?.topic_name}
              </TableCell>
              <TableCell align="center">{data?.topic?.add?.science}</TableCell>
              <TableCell align="center">{data?.topic?.add?.class}</TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                align="center"
              >
                <RemoveRedEye />
                <ResourceEditModal setOpen={setOpen} open={open} id={data.id} />
                <Button  onClick={() => setOpen(true)} ><StickyNote2 /></Button>
                <ResourceDelete  id={data.id} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ResourcesModeratorTable;
