import { patchLiveServicesProps } from "types/shared.type";
import AXIOS_INSTANCE from "./axios";


export const AddTestimonyAPIFn = async (payload: any): Promise<any> => {
    try {
        let url = 'testimony/create'

        const response = await AXIOS_INSTANCE.post(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating article:", error);
        return error?.response;
    }
};
