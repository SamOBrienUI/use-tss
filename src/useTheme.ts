import { useMemo } from "react";

export function useTheme<T extends { light: any; dark: any; globals: any }>(
  themeDef: T,
  mode: "light" | "dark"
) {
  type ThemeMode = keyof Omit<T, "globals">;
  type ThemeValue = T[ThemeMode] & { globals: T["globals"] };

  const theme = useMemo(() => {
    return {
      ...themeDef[mode],
      globals: themeDef.globals,
    } as ThemeValue;
  }, [themeDef, mode]);

  return theme;
}
