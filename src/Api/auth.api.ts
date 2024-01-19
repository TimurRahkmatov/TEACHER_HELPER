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

export const auth_api = {
  register: (body: IRegister) => axios.post(BASE_URL + "/auth/register", body),
  verification: (body: IVerivation) =>
    axios.post(BASE_URL + "/auth/confirm", body),
  resed: (body: IResed) => axios.post(BASE_URL + "/auth/resend" , body),
};
