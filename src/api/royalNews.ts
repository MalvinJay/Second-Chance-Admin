import { patchLiveServicesProps } from "types/shared.type";
import AXIOS_INSTANCE from "./axios";


export const AddArticleAPIFn = async (payload: any): Promise<any> => {
    try {
        let url = 'posts/create'

        const response = await AXIOS_INSTANCE.post(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating article:", error);
        return error?.response;
    }
};

export const AddEditCategoryAPIFn = async (payload: any): Promise<any> => {
    try {
        let url: string = "";
        let method: string = "";
        let data = null

        if (payload.mode === "edit") {
            url = `categories/${payload.id}`
            method = "put"
            data = {
                name: payload.name
            }
        } else {
            url = "categories/create"
            method = "post"
            data = payload
        }

        const response = await AXIOS_INSTANCE[method](url, data);
        return response.data;
    } catch (error: any) {
        console.log("Error creating category:", error);
        return error?.response;
    }
};