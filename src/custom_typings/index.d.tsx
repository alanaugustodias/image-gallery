declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const content: any;
    export = content;
}

declare const __ENVIRONMENT__: string;
