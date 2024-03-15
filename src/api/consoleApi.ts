import axios from "axios";
import { LANGUAGE_VERSIONS } from "../option";

export const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});

export const checkCode = async (stack:string, sourceCode:any) => {
    const res = await API.post("/execute", {
        language: stack,
        version: LANGUAGE_VERSIONS[stack],
        files: [
            {
                content: sourceCode,
            },
        ],
    });
    console.log(res);
    return res.data;
}