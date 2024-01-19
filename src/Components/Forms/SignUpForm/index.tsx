import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { base_api } from "../../../Api/base.api";
import { auth_api } from "../../../Api/auth.api";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { registerAuth } from "../../../store/slices/auth";


const SignUpForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [Sciences, setSciences] = useState([]);
  const [username, setUsername] = useState("");
  const [science, setScience] = useState("");
  
  const handleRegister = async (e:any):Promise<void> => {
    e.preventDefault()
    try {
      const {data} = await auth_api.register({username: username , science_id: +science})
      if(data.code === 200) {
        dispatch(registerAuth({username: username}))
        navigate('/verification')
      }
    } catch (error: any) {
      if(error.response.data.code === 1111) {
        dispatch(registerAuth({username: username}))

        navigate('/verification')
      }
      console.log(error);
    }
  };

  const getAllSciences = async () => {
    try {
      const { data } = await base_api.findAllSciences();
      if (data?.code === 200) {
        setSciences(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSciences();
  }, []);

  return (
    <Box sx={{ marginTop: "0.3rem" }}>
      <FormControl
        component="form"
        onSubmit={handleRegister}
        sx={{ width: "100%", padding: "0.5rem 0" }}
      >
        <FormLabel
          sx={{
            marginTop: "0.7rem",
            marginBottom: "-0.5rem",
            color: "#000",
          }}
          htmlFor="phone"
        >
          Only phone number
        </FormLabel>
        <TextField
          variant="outlined"
          sx={{ padding: "0.7rem 0" }}
          required
          fullWidth
          id="phone"
          name="phone"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="phoneNumber"
          autoFocus
          placeholder="Phone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <label style={{fontSize: '17px' , fontWeight: "600"}} htmlFor="sciences">Sciences</label>
        <select className="select" name="" value={science} onChange={(e) => setScience(e.target.value)} id="sciences">
          {Sciences.map((item: any) => (
            <>
              <option value={item.id}>{item?.science_name}</option>
            </>
          ))}
        </select>
        <Button
        type="submit"
          sx={{
            padding: "0.7rem 0",
            textAlign: "center",
            width: "100%",
            backgroundColor: "#2F93F6",
            color: "#fff",
            textTransform: "none",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#2F93F6",
              border: "1px solid #2F93F6",
            },
          }}
        >
          Sign Up
        </Button>
        <Box sx={{display: "flex" , alignItems: 'center' , justifyContent: "space-between"}}>
          <Link to='/signin' style={{textDecoration: "none" , color: "inherit"}}>
          <Typography
            variant="body1"
            sx={{
              color: "#009EF7",
              textAlign: "start",
              padding: "0.3rem 0",
              "&:hover": {
                color: "#009cf75c",
                transition: "0.4s",
              },
            }}
          >
            You have not account ?
          </Typography>
          </Link>
          <Typography
            variant="body1"
            sx={{
              color: "#009EF7",
              textAlign: "end",
              padding: "0.3rem 0",
              "&:hover": {
                color: "#009cf75c",
                transition: "0.4s",
              },
            }}
          >
            Forgot Password?
          </Typography>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
