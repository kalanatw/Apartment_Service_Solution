import axios from "axios"

const baseurl = axios.create({baseURL:"http://assapp.herokuapp.com"})

export default baseurl;