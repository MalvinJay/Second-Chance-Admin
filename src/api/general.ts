import { patchLiveServicesProps } from "types/shared.type";
import AXIOS_INSTANCE from "./axios";


export const AddHeaderAPIFn = async (payload: any): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.post("/content/header", payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating show:", error);
        return error?.response;
    }
};
export const patchHeaderAPIFn = async (payload: patchLiveServicesProps): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.put(`/content/header/${payload.id}`, payload.data);
        return response.data;
    } catch (error: any) {
        console.log("Error updating live service:", error);
        return error?.response;
    }
};