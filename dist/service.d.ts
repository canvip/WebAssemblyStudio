import { File, Project, IStatusProvider } from "./model";
import "monaco-editor";
export interface IFiddleFile {
    name: string;
    data?: string;
    type?: "binary" | "text";
}
export interface ICreateFiddleRequest {
    files: IFiddleFile[];
}
export interface ILoadFiddleResponse {
    files: IFiddleFile[];
    id: string;
    message: string;
    success: boolean;
}
export declare enum Language {
    C = "c",
    Cpp = "cpp",
    Wat = "wat",
    Wasm = "wasm",
    Rust = "rust",
    Cretonne = "cton",
    x86 = "x86",
    Json = "json",
    JavaScript = "javascript",
    TypeScript = "typescript",
    Text = "text",
}
export interface IServiceRequestTask {
    file: string;
    name: string;
    output: string;
    console: string;
    success: boolean;
}
export interface IServiceRequest {
    success: boolean;
    tasks: IServiceRequestTask[];
    output: string;
    wasmBindgenJs: string | undefined;
}
export declare enum ServiceTypes {
    Rustc = 0,
    Clang = 1,
    Service = 2,
}
export declare class Service {
    private static worker;
    static sendRequestJSON(content: Object, to: ServiceTypes): Promise<IServiceRequest>;
    static sendRequest(content: string, to: ServiceTypes): Promise<IServiceRequest>;
    static getMarkers(response: string): monaco.editor.IMarkerData[];
    static compileFile(file: File, from: Language, to: Language, options?: string): Promise<any>;
    static compileFileWithBindings(file: File, from: Language, to: Language, options?: string): Promise<any>;
    static compile(src: string | ArrayBuffer, from: Language, to: Language, options?: string): Promise<IServiceRequest>;
    static disassembleWasm(buffer: ArrayBuffer, status: IStatusProvider): Promise<string>;
    static disassembleWasmWithWabt(file: File, status?: IStatusProvider): Promise<void>;
    static assembleWat(wat: string, status?: IStatusProvider): Promise<ArrayBuffer>;
    static assembleWatWithWabt(file: File, status?: IStatusProvider): Promise<void>;
    static createGist(json: object): Promise<string>;
    static loadJSON(uri: string): Promise<ILoadFiddleResponse>;
    static saveJSON(json: ICreateFiddleRequest, uri: string): Promise<string>;
    static parseFiddleURI(): string;
    static exportToGist(content: File, uri?: string): Promise<string>;
    static saveProject(project: Project, openedFiles: string[][], uri?: string): Promise<string>;
    static loadFilesIntoProject(files: IFiddleFile[], project: Project, basePath?: string): Promise<any>;
    static lazyLoad(uri: string, status?: IStatusProvider): Promise<any>;
    static optimizeWasmWithBinaryen(file: File, status?: IStatusProvider): Promise<void>;
    static validateWasmWithBinaryen(file: File, status?: IStatusProvider): Promise<boolean>;
    static getWasmCallGraphWithBinaryen(file: File, status?: IStatusProvider): Promise<void>;
    static disassembleWasmWithBinaryen(file: File, status?: IStatusProvider): Promise<void>;
    static convertWasmToAsmWithBinaryen(file: File, status?: IStatusProvider): Promise<void>;
    static assembleWatWithBinaryen(file: File, status?: IStatusProvider): Promise<void>;
    static downloadLink: HTMLAnchorElement;
    static download(file: File): void;
    static clangFormatModule: any;
    static clangFormat(file: File, status?: IStatusProvider): Promise<void>;
    static disassembleX86(file: File, status?: IStatusProvider, options?: string): Promise<void>;
    private static binaryExplorerMessageListener;
    static openBinaryExplorer(file: File): void;
    static compileMarkdownToHtml(src: string): Promise<string>;
    static twiggyWasm(file: File, status: IStatusProvider): Promise<string>;
}
