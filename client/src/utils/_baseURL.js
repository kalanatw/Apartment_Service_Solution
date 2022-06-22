import axios from "axios"

const baseurl = axios.create({baseURL:"https://assapp.herokuapp.com"})

export default baseurl;