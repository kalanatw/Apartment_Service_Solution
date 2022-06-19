import axios from "axios"

const baseurl = axios.create({baseURL:"http://localhost:9000"})

export default baseurl;