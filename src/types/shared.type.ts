export interface IImageUploadPayload {
    image: string;
    folder: string;
}
export type TAlertMsgProp = {
    msg?: string;
    status: "success" | "info" | "error" | "warning";
};

export interface patchLiveServicesProps {
    id: string;
    data: any;
}