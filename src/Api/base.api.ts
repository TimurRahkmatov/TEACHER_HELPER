import axios from "axios";

import { BASE_URL } from "./auth.api";


export const base_api = {
  findAllSciences: () => axios.get(BASE_URL + "/science?"),
  findAllTopics : () => axios.get(BASE_URL + "/topic?class_id=5&science_id=6&")
};
