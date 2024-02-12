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
    type?: string;
}

export interface IAddEditProps {
    title: string;
    editMode: boolean;
    handleClose: () => void;
    type?: string;
    initialValues?: any;
    setShowAlert?: (e: boolean) => void;
    setAlertMsg?: (e: TAlertMsgProp) => void;
}