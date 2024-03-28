import axios from "axios";

export const createContainerTest = async (username: string, projectName: string, baseImg: string, cpu: string, memory: string) => {
    try{
        const result = await axios.post("https://eb6d-112-218-243-204.ngrok-free.app/api/containers/create",{
            username,
            projectName,
            baseImg,
            cpu,
            memory,
        })
        return result.data;
    }catch(err){
        return console.error(err);
    }
}