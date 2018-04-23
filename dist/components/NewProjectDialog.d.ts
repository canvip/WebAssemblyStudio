/// <reference types="react" />
import * as React from "react";
import { IFiddleFile } from "../service";
export interface Template {
    name: string;
    description: string;
    files: IFiddleFile[];
    icon: string;
}
export declare class NewProjectDialog extends React.Component<{
    isOpen: boolean;
    onCreate: (template: Template) => void;
    onCancel: () => void;
}, {
    description: string;
    name: string;
    template: Template;
    templates: Template[];
}> {
    constructor(props: any);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    nameError(): void;
    createButtonLabel(): string;
    componentDidMount(): Promise<void>;
    setTemplate(template: Template): Promise<void>;
    render(): JSX.Element;
}
