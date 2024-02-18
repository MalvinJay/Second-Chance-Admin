import AXIOS_INSTANCE from "./axios";


export const AddAdvertsAPIFn = async (payload: any): Promise<any> => {
    try {
        let url = 'advertisements/create'

        const response = await AXIOS_INSTANCE.post(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating advert:", error);
        return error?.response;
    }
};

export const EditAdvertsAPIFn = async (payload: any): Promise<any> => {
    try {
        if (!payload.id) return;

        let url = `advertisements/${payload.id}`

        const response = await AXIOS_INSTANCE.put(url, payload);
        return response.data;
    } catch (error: any) {
        console.log("Error creating advert:", error);
        return error?.response;
    }
};

export const DeleteAdvertAPIFn = async (id: string): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.delete(`/advertisements/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("Error removing fm station:", error);
        return error?.response;
    }
};
