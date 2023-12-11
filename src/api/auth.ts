
import { LoginProps, LogoutProps } from "types/auth.types";
import AXIOS_INSTANCE from "./axios";

export const login = async (payload: LoginProps): Promise<any> => {
    try {
        const response = await AXIOS_INSTANCE.post("/login", payload);
        console.log("login response:", response);
        return response;
    } catch (error: any) {
        console.log(error);
        return error?.response;
    }
};

export const logout = async (payload: LogoutProps) => {
    try {
        const { data } = await AXIOS_INSTANCE.post("/logout", payload);
        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
};
