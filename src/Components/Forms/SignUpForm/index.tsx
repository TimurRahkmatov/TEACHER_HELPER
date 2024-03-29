import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { base_api } from "../../../Api/base.api";
import { auth_api } from "../../../Api/auth.api";
import { InputMask } from "@react-input/mask";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { registerAuth } from "../../../store/slices/auth";

const SignUpForm = ({ setLoading }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [Sciences, setSciences] = useState([]);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [science, setScience] = useState("");

  const PhoneNumber = `${username.slice(0, 3)}${username.slice(
    5,
    7
  )}${username.slice(9, 12)}${username.slice(13, 15)}${username.slice(16, 18)}`;

  const handleRegister = async (e: any): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      if (science.length == 0) {
        setError(true);
      } else {
        setError(false);
      }
      const { data } = await auth_api.register({
        username: PhoneNumber,
        science_id: +science,
      });
      if (data.code === 200) {
        dispatch(registerAuth({ username: PhoneNumber }));
        navigate("/verification");
      }
    } catch (error: any) {
      if (error.response.data.code === 1111) {
        dispatch(registerAuth({ username: username }));
        navigate("/verification");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  type ScienceType = {
    id: number;
    science_name: string;
    science_group: string;
  };
  const getAllSciences = async () => {
    try {
      const { data } = await base_api.findAllSciences();
      if (data?.code === 200) {
        setSciences(data?.data);
      }
    } catch (error) {
      console.log("get Error", error);
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
            color: "grey",
          }}
          htmlFor="phone"
        >
          Only phone number
        </FormLabel>
        <InputMask
        required
          placeholder="998 (90) 255-23-45"
          id="phone"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            height: "54px",
            marginTop: "0.6rem",
            fontSize: "18px",
            paddingLeft: "15px",
            zIndex: "2",
            position: "relative",
          }}
          mask="___ (__) ___-__-__"
          replacement={{ _: /\d/ }}
        />
        <FormLabel
          error={error}
          sx={{ marginTop: "1rem" }}
          htmlFor="scienceSelect"
        >
          Sciences
        </FormLabel>
        <Select
          error={error}
          onChange={(e) => setScience(e.target.value)}
          value={science}
          labelId="Fanlar"
          id="scienceSelect"
        >
          {Sciences?.map((item: ScienceType) => (
            <MenuItem key={item?.id} value={item?.id}>
              {item?.science_name}
            </MenuItem>
          ))}
        </Select>

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/passwordchange">
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
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
