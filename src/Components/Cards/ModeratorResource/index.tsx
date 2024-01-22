import { ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { moderator_api } from "../../../Api/moderator.api";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { EditModeratorResource } from "../../../store/slices/moderator";
import { Link } from "react-router-dom";

const ModeratorResourceCard = () => {
  const dispatch = useAppDispatch();
  const resources = useAppSelector((state) => state.moderator.resources);

  const getAllModeratorResource = async (): Promise<void> => {
    try {
      const { data } = await moderator_api.getAllResources();
      dispatch(EditModeratorResource(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllModeratorResource();
  }, []);

  return (
    <Box
      sx={{
        padding: "2rem 0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {
          lg: "start",
          md: "start",
          sm: "center",
          xs: "center",
        },
        gap: "2rem",
      }}
    >
      {resources.map((item: any) => (
        <Link to={`/moderator/resource/${item.id}`} style={{color: "inherit" , textDecoration: "none"}}>
          <Box
            sx={{
              width: "350px",
              minHeight: "70px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "19px" }}>
                {item.resource_name}
              </Typography>
              <Typography sx={{ fontWeight: "600", color: "grey" }}>
                {item.created_at}
              </Typography>
            </Box>
            <ArrowRight />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ModeratorResourceCard;
