import { patchLiveServicesProps } from "types/shared.type";
import AXIOS_INSTANCE from "./axios";


export const AddFMStationAPIFn = async (payload: any): Promise<any> => {
    try {
        let url = 'stations/create'

        const response = await AXIOS_INSTANCE.post(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating article:", error);
        return error?.response;
    }
};

export const EditFMStationAPIFn = async (payload: any): Promise<any> => {
    try {
        let url = `stations/${payload.id}`

        const response = await AXIOS_INSTANCE.put(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating article:", error);
        return error?.response;
    }
};

export const DeleteFMStationAPIFn = async (id: string): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.delete(`/stations/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("Error removing fm station:", error);
        return error?.response;
    }
};