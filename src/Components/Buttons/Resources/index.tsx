import { Box } from "@mui/material";

const buttons = [
    {
      title: "bepul",
    },
    {
      title: "Sotib oling",
    },
    {
      title: "All",
    },
  ];

const ResourcesButtons = () => {
  return (
    <Box
      sx={{
        width: "320px",
        height: "45px",
        borderRadius: "20px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 30px #bababa54",
      }}
    >
      {buttons.map((item) => (
        <Box
          sx={{
            color: "#40bfc1",

            width: "100px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#40bfc1",
              color: "#fff",
              transition: "0.3s",
            },
          }}
        >
          {item?.title}
        </Box>
      ))}
    </Box>
  );
};

export default ResourcesButtons;
