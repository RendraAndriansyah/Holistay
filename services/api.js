import axios from "axios";
import { comment } from "postcss";

const instance = axios.create({
    baseURL: `http://34.136.159.229/`,
})

export default {
    login: ({ email, password }) =>
        instance({
            method: `POST`,
            url: `auth`,
            data: {
                email: email,
                password: password,
            }
        }),
    }