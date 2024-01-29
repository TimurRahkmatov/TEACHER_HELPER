import { Box, Card, Skeleton, Typography } from "@mui/material";
import { teacher_api } from "../../../../Api/teacher.api";
import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ResourceByIdCard = () => {
  const [data, setData]: any = useState({});
  const { id }: Params<string> = useParams();
  const [loading, setLoading] = useState(false);

  const findByIdResource = async (): Promise<void> => {
    setLoading(true);
    try {
      const { data } = await teacher_api.findByIdResource(id);
      if (data.code === 200) {
        setData(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findByIdResource();
  }, []);

  return (
    <Box sx={{ marginTop: "2rem" }}>
      {loading == true ? (
        <Card
          variant="outlined"
          sx={{
            width: "100%",
           
            gap: 2,
            height: "200px",
            padding: "2rem",
          }}
        >
         
            <Skeleton width={"290px"} height={"35px"} />
            <Skeleton width={"250px"} height={"22px"} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: '100%'
              }}
            >
              <Box sx={{ marginTop: "3rem" }}>
                <Skeleton width={"200px"} height={"20px"} />
                <Skeleton width={"120px"} height={"19px"} />
              </Box>
              <Box sx={{ marginTop: "3rem" }}>
                <Skeleton width={"200px"} height={"20px"} />
                <Skeleton width={"120px"} height={"19px"} />
              </Box>
              <Box sx={{ marginTop: "3rem" }}>
                <Skeleton width={"200px"} height={"20px"} />
                <Skeleton width={"120px"} height={"19px"} />
              </Box>
            </Box>
        </Card>
      ) : (
        // <Skeleton variant="rectangular" width={"100%"} height={"200px"} sx={{borderRadius:"9px"}} />
        <Box
          sx={{
            width: "100%",
            minHeight: "200px",
            backgroundColor: "#074e5228",
            padding: "1rem 2rem",
            borderRadius: "10px",
            display: "flex",

            alignItems: "center",
            gap: "1rem",
            flexDirection: {
              lg: "inherit",
              md: "inherit",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h6">
                {data?.moderator?.user?.first_name}{" "}
                {data?.moderator?.user?.last_name}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ marginTop: "1rem", width: "90%" }}
            >
              {data?.topic?.topic_name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#B0B0B0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#40BFC1" }}>
                    {data?.status}
                  </Typography>
                </Typography>
                <Typography variant="body1" sx={{ color: "#888888" }}>
                  status
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: "#40BFC1" }}>
                  {data?.topic?.add?.class}
                </Typography>
                <Typography sx={{ color: "#888" }}>Sinf</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: "#40BFC1" }}>
                  {data?.topic?.add?.science}
                </Typography>
                <Typography sx={{ color: "#888" }}>Fan</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ResourceByIdCard;
