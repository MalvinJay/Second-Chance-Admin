import { patchLiveServicesProps } from "types/shared.type";
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
export const PatchLiveServiceAPIFn = async (payload: patchLiveServicesProps): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.put(`/live-services/${payload.id}`, payload.data);
        return response.data;
    } catch (error: any) {
        console.log("Error updating live service:", error);
        return error?.response;
    }
};

export const DeleteLiveServicesAPIFn = async (id: string): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.delete(`/live-services/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("Error deleting live service:", error);
        return error?.response;
    }
};

export const DeleteShowAPIFn = async (payload: any): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.delete("/live-services/create", payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating show:", error);
        return error?.response;
    }
};