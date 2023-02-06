import axios from "axios";

const BASE_URL = "https://fakestoreapi.com"

const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
}

export {getUsers};