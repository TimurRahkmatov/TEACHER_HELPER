import { Folder, PlayCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const FilesCard = () => {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Box
        sx={{
          borderBottom: "1px solid #58D5D3",
          paddingBottom: "9px",
          width: "300px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#58D5D3", fontWeight: "600" }}>
          Файл
        </Typography>
      </Box>
      <Box sx={{ padding: "1.5rem 0" }}>
        <Box sx={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#58D5D3",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <Folder />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              Просмотр темы
            </Typography>
            <Typography sx={{ color: "grey" }}>256 КБ</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #58D5D3",
          paddingBottom: "9px",
          width: "300px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#58D5D3", fontWeight: "600" }}>
          График
        </Typography>
      </Box>
      <Box sx={{ padding: "1.5rem 0" }}>
        <Box sx={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#58D5D3",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <Folder />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              тема 1
            </Typography>
            <Typography sx={{ color: "grey" }}>256 КБ</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #58D5D3",
          paddingBottom: "9px",
          width: "300px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#58D5D3", fontWeight: "600" }}>
          Видео
        </Typography>
      </Box>
      <Box sx={{ padding: "1.5rem 0" , display: "flex" , flexWrap: 'wrap' ,  justifyContent: "space-between" , gap: "1rem"}}>
        {[0, 1, 2,3].map((item:any) => (
          <Box sx={{ display: "flex", gap: "0.7rem", alignItems: "center" , width: {lg: "250px" , md: "250px" , sm: "250px" , xs:"170px"}}}>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#58D5D3",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <PlayCircle />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                тема 1 {item}
              </Typography>
              <Typography sx={{ color: "grey" }}>256 КБ</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilesCard;
