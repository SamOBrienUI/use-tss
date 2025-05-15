export declare function useTheme<T extends {
    light: any;
    dark: any;
}>(themeDef: T, mode: "light" | "dark"): T[keyof T];
