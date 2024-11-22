import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
    console.log("credentials, USERS_API", credentials, USERS_API);
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const signup = async (user: any) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
};

