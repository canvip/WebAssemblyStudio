import { File, FileType } from "../../model";
export declare enum ViewType {
    Editor = 0,
    Markdown = 1,
    Binary = 2,
    Viz = 3,
}
export declare function defaultViewTypeForFileType(type: FileType): ViewType.Editor | ViewType.Markdown | ViewType.Viz;
export declare class View {
    file: File;
    type: ViewType;
    state: monaco.editor.ICodeEditorViewState;
    constructor(file: File, type?: ViewType);
    clone(): View;
}
