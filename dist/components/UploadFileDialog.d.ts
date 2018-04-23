/// <reference types="react" />
import * as React from "react";
import { File, Directory, ModelRef } from "../model";
import { UploadInput } from "./Widgets";
export interface UploadFileDialogProps {
    isOpen: boolean;
    directory: ModelRef<Directory>;
    onUpload: (file: File[]) => void;
    onCancel: () => void;
}
export declare class UploadFileDialog extends React.Component<UploadFileDialogProps, {}> {
    root: ModelRef<Directory>;
    uploadInput: UploadInput;
    constructor(props: any);
    private handleUpload(files);
    private readUploadedFile(inputFile, readAs);
    render(): JSX.Element;
}
