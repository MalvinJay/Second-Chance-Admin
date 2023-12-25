import AXIOS_INSTANCE from "./axios";


export const AddShowAPIFn = async (payload: any): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.post("/live-services/create", payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating show:", error);
        return error?.response;
    }
};