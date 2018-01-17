import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.zroomm.com/api/v1/consumer',
});

