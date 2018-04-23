/// <reference types="react" />
import * as React from "react";
export declare class Button extends React.Component<{
    icon?: JSX.Element;
    label?: string;
    title?: string;
    isDisabled?: boolean;
    onClick?: Function;
    customClassName?: string;
}, {}> {
    render(): JSX.Element;
}
