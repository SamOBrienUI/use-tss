"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = useTheme;
const react_1 = require("react");
function useTheme(themeDef, mode) {
    const theme = (0, react_1.useMemo)(() => {
        return themeDef[mode];
    }, [themeDef, mode]);
    return theme;
}
