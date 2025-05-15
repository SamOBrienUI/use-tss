# use-tss

Flexible, type-safe, and IntelliSense powered style engine for React & React Native.

## Installation

```sh
npm install use-tss
# or
yarn add use-tss
```

## Setup (React)

First, define your theme and create your hooks:

```ts
// theme.ts
import { createUseStylesFactory } from "./useStyles";
import { useTheme } from "./useTheme";

// Define the types for the styles you're creating
type CSSProperties = {
  [key: string]: React.CSSProperties;
};

export class StyleSheet {
  static create<Styles extends CSSProperties>(styles: Styles): Styles {
    return styles;
  }
}

// Define your theme object
const themeTokens = {
  light: {
    colors: {
      primary: "#6200ee",
      secondary: "#03dac6",
      background: "#ffffff",
    },
  },
  dark: {
    colors: {
      primary: "#bb86fc",
      secondary: "#03dac6",
      background: "#121212",
    },
  },
} as const;

// Create your useStyles hook
export function useStyles() {
  // You can provide your own logic to determine the current color scheme
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // Create the theme object
  const theme = useTheme(themeTokens, colorScheme);

  // Return the useStyles hook with the created theme
  return createUseStyles(theme, StyleSheet.create);
}

export function App() {
  // Now create your styles using the useStyles hook
  const styles = useStyles()(({ colors }) => ({
    container: {
      color: colors.primary,
      backgroundColor: colors.background,
    },
    text: {
      color: colors.secondary,
      fontSize: 16,
    },
  }));

  return (
    <div styles={styles.container}>
      <h1 style={styles.text}>Hello, World!</h1>
    </div>
  );
}
```

## Setup (React Native)

```ts
import { createUseStylesFactory } from "./useStyles";
import { useTheme } from "./useTheme";
import { StyleSheet, useColorScheme } from "react-native";
import type { ViewStyle, TextStyle, ImageStyle, View } from "react-native";

// Define what kind of styles you're creating
type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

// Define your theme object
const themeTokens = {
  light: {
    colors: {
      primary: "#6200ee",
      secondary: "#03dac6",
      background: "#ffffff",
    },
  },
  dark: {
    colors: {
      primary: "#bb86fc",
      secondary: "#03dac6",
      background: "#121212",
    },
  },
} as const;

export function useStyles() {
  // You can provide your own logic to determine the current color scheme
  const colorScheme = useColorScheme();

  // Create the theme object
  const theme = useTheme(themeTokens, colorScheme);

  // Return the useStyles hook with the created theme
  return createUseStyles(theme, StyleSheet.create);
}

export function App() {
  // Now create your styles using the useStyles hook
  const styles = useStyles()(({ colors }) => ({
    container: {
      color: colors.primary,
      backgroundColor: colors.background,
      padding: 16,
      borderRadius: 8,
      background: colors.background,
      elevation: 2,
    },
    text: {
      color: colors.secondary,
      fontSize: 16,
    },
  }));

  return (
    <View styles={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}
```

The styles will automatically update when the device theme changes.

## Type Safety

The library provides full TypeScript support, giving you autocomplete and type checking for your theme properties.

## License

MIT
