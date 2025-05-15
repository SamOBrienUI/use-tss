import { useMemo } from "react";

export function createUseStylesFactory<
  TTheme,
  TStyles extends Record<string, any>,
  TOutput
>(theme: TTheme, createStylesFn: (styles: TStyles) => TOutput) {
  return function useStyles(stylesFn: (theme: TTheme) => TStyles): TOutput {
    return useMemo(() => {
      const styles = stylesFn(theme);
      return createStylesFn(styles);
    }, [theme, stylesFn]);
  };
}
