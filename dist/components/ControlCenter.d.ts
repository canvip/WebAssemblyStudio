/// <reference types="react" />
import * as React from "react";
import { SplitInfo } from "./Split";
import { EditorView, View } from "./editor";
export declare class ControlCenter extends React.Component<{
    onToggle?: Function;
}, {
    /**
     * Split state.
     */
    splits: SplitInfo[];
    /**
     * Visible pane.
     */
    visible: "output" | "problems";
    problemCount: number;
    outputLineCount: number;
}> {
    constructor(props: any);
    onOutputChanged: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    outputView: View;
    refs: {
        container: HTMLDivElement;
    };
    outputViewEditor: EditorView;
    setOutputViewEditor(editor: EditorView): void;
    updateOutputViewTimeout: any;
    updateOutputView(): void;
    createPane(): JSX.Element;
    getOutputLineCount(): number;
    getProblemCount(): number;
    render(): JSX.Element;
}
