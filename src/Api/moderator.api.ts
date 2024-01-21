import axios from "axios";

import { BASE_URL } from "./auth.api";

interface IResourceCreate {
    topic_id: number,
    resource_name: string,
    files: string
}

export const moderator_api = {
    createResource: (body: IResourceCreate) => axios.post(BASE_URL + "/moderator/resource" , body)
};
