import { IImageUploadPayload } from "types/shared.type";
import AXIOS_INSTANCE from "./axios";


export const imageVideoUploadAPIFn = async (payload: IImageUploadPayload): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.post("/files/upload", payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    } catch (error: any) {
        console.log("Error uploading item:", error);
        return error?.response;
    }
};
