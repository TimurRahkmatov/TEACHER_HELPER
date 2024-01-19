import axios from "axios";

export const BASE_URL = "https://teacher.iprogrammer.uz/api";

interface IVerivation {
  username: string;
  code: number;
}

interface IRegister {
  username: string;
  science_id: number;
}

interface IResed {
  username: string;
}

interface ILogin {
    username: string
    password: string
}

interface IPasswordChange {
    password: string,
}

const token = localStorage.getItem("token")
if (token) {
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  }


export const auth_api = {
  register: (body: IRegister) => axios.post(BASE_URL + "/auth/register", body),
  verification: (body: IVerivation) =>
    axios.post(BASE_URL + "/auth/confirm", body),
  resed: (body: IResed) => axios.post(BASE_URL + "/auth/resend" , body),
  passwordChange: (body: IPasswordChange , token:String) => axios.post(BASE_URL + "/auth/password/change" , body , {headers: {
    "Authorization": "Bearer" +  " "  + token
  }}),
  login: (body: ILogin ) => axios.post(BASE_URL + '/auth/login' , body)
};
