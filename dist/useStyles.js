"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseStylesFactory = createUseStylesFactory;
const react_1 = require("react");
function createUseStylesFactory(theme, createStylesFn) {
    return function useStyles(stylesFn) {
        return (0, react_1.useMemo)(() => {
            const styles = stylesFn(theme);
            return createStylesFn(styles);
        }, [theme, stylesFn]);
    };
}
