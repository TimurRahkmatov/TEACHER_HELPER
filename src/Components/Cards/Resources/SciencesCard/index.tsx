import { ArrowRight } from "@mui/icons-material";
import { Box, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { teacher_api } from "../../../../Api/teacher.api";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { EditTeacherResources } from "../../../../store/slices/teacher";

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface IModerator {
  id: number;
  level: number;
  science: string | null;
  user: IUser;
}

interface IAdd {
  class: string;
  quarter: string;
  science: string;
}
interface Iitem {
  id: number;
  topic_name: string;
  add: IAdd;
}
type ResourceType = {
  created_at: string;
  id: number;
  media: [];
  moderator: IModerator;
  resource_name: string;
  status: string;
  topic: Iitem;
};

const SciencesCard = () => {
  const dispatch = useAppDispatch();
  const [loading , setLoading] = useState(false)
  const state = useAppSelector((state) => state.teacher.resources);
  const getAllResources = async (): Promise<void> => {
    try {
      setLoading(true)
      const { data } = await teacher_api.findAllResource();
      if (data.code === 200) {
        dispatch(EditTeacherResources(data.data));
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllResources();
  }, []);

  return (
    <Box
      sx={{
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
      {loading === true ? ([0,1,2].map((item):any => ( <Skeleton key={item} variant="rectangular" width={"350px"} height={"80px"} sx={{borderRadius:"10px"}} />))) : (state?.map((item: ResourceType) => (
        <Link
          to={`/resource/${item.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <Box
          key={item.id}
            sx={{
              width: "350px",
              minHeight: "70px",
              borderRadius: "10px",
              backgroundColor: "#F6F6F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "19px" }}>
                {item?.resource_name}
              </Typography>
              <Typography sx={{ fontWeight: "600", color: "grey" }}>
                {item?.moderator.user.first_name}
              </Typography>
            </Box>
            <ArrowRight />
          </Box>
        </Link>
      )))}
    </Box>
  );
};

export default SciencesCard;
