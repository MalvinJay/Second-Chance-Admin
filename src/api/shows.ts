import { patchLiveServicesProps } from "types/shared.type";
import AXIOS_INSTANCE from "./axios";


export const AddShowAPIFn = async (payload: any): Promise<any> => {
    try {
        let url = ''
        if (payload.type === "show") url = "tv-shows/create"
        else url = "live-services/create"

        const response = await AXIOS_INSTANCE.post(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating show:", error);
        return error?.response;
    }
};
export const PatchLiveServiceAPIFn = async (payload: patchLiveServicesProps): Promise<any> => {
    try {
        let url = ''
        if (payload.type === "show") url = `/tv-shows/${payload.id}`
        else url = `/live-services/${payload.id}`

        const response = await AXIOS_INSTANCE.put(url, payload.data);
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
export const DeleteShowAPIFn = async (id: string): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.delete(`/tv-shows/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("Error removing tv show:", error);
        return error?.response;
    }
};

// EPISODES
export const AddShowEpisodeAPIFn = async (payload: any): Promise<any> => {
    try {
        const url = "/episodes/create"

        const response = await AXIOS_INSTANCE.post(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error adding episode to show:", error);
        return error?.response;
    }
};
export const PatchShowEpisodeAPIFn = async (payload: patchLiveServicesProps): Promise<any> => {
    try {
        const url = `/episodes/${payload.id}`

        const response = await AXIOS_INSTANCE.put(url, payload.data);
        return response.data;
    } catch (error: any) {
        console.log("Error updating show episode:", error);
        return error?.response;
    }
};