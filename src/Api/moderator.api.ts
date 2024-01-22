import axios from "axios";

import { BASE_URL } from "./auth.api";

interface IResourceCreate {
  topic_id: number;
  resource_name: string;
  files: string;
}


export const moderator_api = {
  createResource: (body: any) =>
    axios.post(BASE_URL + "/moderator/resource", body),
  getAllResources: () =>
    axios.get(BASE_URL + "/moderator/resource"),
    getByIdRerource: (id:number) => axios.get(BASE_URL + "/moderator/resource/" + id)
};
