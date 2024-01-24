import axios from "axios"
import { BASE_URL } from "./auth.api"

export const teacher_api = {
    findAllResource: () => axios.get(BASE_URL + "/teacher/resource/list") 
}