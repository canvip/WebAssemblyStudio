/// <reference types="react" />
import * as React from "react";
import { File, ModelRef } from "../model";
export interface EditFileDialogProps {
    isOpen: boolean;
    file: ModelRef<File>;
    onChange: (name: string, description: string) => void;
    onCancel: () => void;
}
export declare class EditFileDialog extends React.Component<EditFileDialogProps, {
    description: string;
    name: string;
}> {
    constructor(props: EditFileDialogProps);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    onChangeDescription: (event: React.ChangeEvent<any>) => void;
    error(): "" | "A file with the same name already exists.";
    render(): JSX.Element;
}
