import "monaco-editor";
import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import IModel = monaco.editor.IModel;
import IPosition = monaco.IPosition;
export declare const X86: {
    MonarchDefinitions: {
        defaultToken: string;
        ignoreCase: boolean;
        keywords: string[];
        typeKeywords: string[];
        ops: string[];
        registers: string[];
        escapes: RegExp;
        tokenizer: {
            root: any;
            comment: (string | RegExp)[][];
            string: ((string | RegExp)[] | (RegExp | {
                token: string;
                bracket: string;
                next: string;
            })[])[];
            whitespace: (string | RegExp)[][];
        };
    };
    LanguageConfiguration: IRichLanguageConfiguration;
    CompletionItemProvider: {
        provideCompletionItems: (model: IModel, position: IPosition) => monaco.languages.CompletionItem[];
    };
    HoverProvider: {
        provideHover: (model: IModel, position: IPosition) => {
            range: monaco.Range;
            contents: (string | {
                language: string;
                value: string;
            })[];
        };
    };
};
