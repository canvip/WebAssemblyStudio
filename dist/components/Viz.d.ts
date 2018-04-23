/// <reference types="react" />
import * as React from "react";
import { View } from "./editor";
export interface VizViewProps {
    view: View;
}
export declare class VizView extends React.Component<VizViewProps, {
    isVisLoaded: boolean;
    content: string;
}> {
    constructor(props: VizViewProps);
    updateTimeout: number;
    onDidChangeBuffer: () => void;
    componentWillMount(): Promise<void>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(props: VizViewProps): void;
    render(): JSX.Element;
}
