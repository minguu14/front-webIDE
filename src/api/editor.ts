import axios from "axios";

export const commandTest = async (username: string, command: string, taskArn: string, containerName: string) => {
    try {
        const result = await axios.post('https://eb6d-112-218-243-204.ngrok-free.app/api/containers/exec', {
            username,
            command,
            taskArn,
            containerName,
        });
        return result.data;
    }catch (err) {
        return console.error(err);
    }
}

export const treeTest = async (username: string, command: string, taskArn: string, containerName: string) => {
    try {
        const result = await axios.post('https://eb6d-112-218-243-204.ngrok-free.app/api/containers/exec2', {
            username,
            command,
            taskArn,
            containerName,
        });
        return result.data;
    }catch (err) {
        return console.error(err);
    }
}

export const getContainerDataTest = async () => {
    try {
        const result = await axios.get('https://eb6d-112-218-243-204.ngrok-free.app/api/containers/testUsername-testProjectService/tasks');
        return result.data;
    }catch (err) {
        return console.error(err);
    }
}