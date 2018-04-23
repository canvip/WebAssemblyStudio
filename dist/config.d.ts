export interface IConfig {
    serviceUrl: string;
    clang: string;
    rustc: string;
}
export default function getConfig(): Promise<IConfig>;
