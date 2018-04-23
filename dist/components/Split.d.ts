/// <reference types="react" />
import * as React from "react";
import { EventDispatcher } from "../model";
export declare enum SplitOrientation {
    Horizontal = 0,
    Vertical = 1,
}
export interface SplitInfo {
    min?: number;
    max?: number;
    value?: number;
    resize?: "fixed" | "stretch";
}
export interface SplitProps {
    orientation: SplitOrientation;
    onChange?: (splits: SplitInfo[]) => void;
    splits?: SplitInfo[];
    defaultSplit?: SplitInfo;
    children: React.ReactNode;
    name?: string;
}
export declare class Split extends React.Component<SplitProps, {
    splits: SplitInfo[];
}> {
    container: HTMLDivElement;
    static onGlobalResize: EventDispatcher;
    static onResizeBegin: EventDispatcher;
    static onResizeEnd: EventDispatcher;
    constructor(props: any);
    index: number;
    onResizerMouseDown(i: number): void;
    /**
     * This fires for all splits, even if the resizer doesn't belong to this split.
     */
    onResizerMouseUp: (e: Event) => void;
    onResizerMouseMove: (e: React.MouseEvent<any>) => void;
    querySolver(splits: SplitInfo[]): void;
    componentWillReceiveProps(nextProps: SplitProps): void;
    private getContainerSize(orientation);
    private canonicalizeSplits(props);
    private solver;
    private vars;
    /**
     * Initializes a Cassowary solver and the constraints based on split infos and container size.
     */
    private setupSolver(splits, containerSize);
    suggestVarValues(splits: SplitInfo[]): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
