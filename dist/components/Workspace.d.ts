/// <reference types="react" />
import * as React from "react";
import { Project, File, Directory, ModelRef } from "../model";
import { SplitInfo } from "./Split";
export interface WorkspaceProps {
    /**
     * Active file.
     */
    file: ModelRef<File>;
    project: ModelRef<Project>;
    onEditFile?: (file: File) => void;
    onDeleteFile?: (file: File) => void;
    onMoveFile?: (file: File, directory: Directory) => void;
    onRenameFile?: (file: File) => void;
    onNewFile?: (directory: Directory) => void;
    onNewDirectory?: (directory: Directory) => void;
    onClickFile: (file: File) => void;
    onDoubleClickFile?: (file: File) => void;
    onUploadFile?: (directory: Directory) => void;
    onCreateGist: (fileOrDirectory: File) => void;
}
export declare class Workspace extends React.Component<WorkspaceProps, {
    showProject: boolean;
    showFiles: boolean;
    splits: SplitInfo[];
}> {
    constructor(props: any);
    onFileDidChangeDirty: () => void;
    onDirectoryDidChangeChildren: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
