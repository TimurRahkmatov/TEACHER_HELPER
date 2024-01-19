import axios from "axios";

import { BASE_URL } from "./auth.api";

export const base_api = {
  findAllSciences: () => axios.get(BASE_URL + "/science?"),
};
