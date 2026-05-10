# d-react-native-styles

## Project description

`d-react-native-styles` is a utility-first styling helper for React Native. You compose **class name strings** (similar in spirit to Tailwind CSS) and pass them to `styles()`; the library maps those names to React Native style objects. Colors, font scales, sizes, optional light/dark schemes, and your own class names are all configurable.

**Naming note:** This is **not** a Tailwind port. Class names follow this library’s own rules (for example `p-4` and `rounded-2` use **numeric theme scales**, not Tailwind’s `rem`-based scale). See [Utility classes](#utility-classes) below.

## Installation

```bash
npm install d-react-native-styles
```

or

```bash
yarn add d-react-native-styles
```

## Usage guide

### 1. Load theme early (recommended)

Call `Colors.loadColors`, `Fonts.loadFonts`, `Sizes.loadSizes`, and optionally `Scheme.loadSchemes` / `Styles.loadStyles` **once at startup**, before your UI renders.

**Important:** In your app entry file (e.g. `index.js` / `index.tsx`), import your config **first** so it runs before other files import `d-react-native-styles`. That way `Scheme` (if you use it) picks up the same color keys you configured on `Colors`.

```typescript
// index.tsx (entry) — put this import first
import "./styleConfig";
import { AppRegistry } from "react-native";
import App from "./App";
// ...
```

### 2. Example `styleConfig`

```typescript
// styleConfig.ts
import { Platform } from "react-native";
import { Colors, Fonts, Sizes, Styles, Scheme } from "d-react-native-styles";

Colors.loadColors({
  primary: "#007bff",
  secondary: "#6c757d",
});

Fonts.loadFonts(
  {
    [Platform.OS]: {
      family: {
        regular: "YourApp-Regular",
        bold: "YourApp-Bold",
        medium: "YourApp-Medium",
        semiBold: "YourApp-SemiBold",
        light: "YourApp-Light",
      },
      baseFontSize: 16,
    },
  },
  {
    display: {
      fontSize: 32,
      fontFamily: "YourApp-Bold",
    },
  },
);

Sizes.loadSizes({
  paddingMedium: 20,
  borderRadiusMedium: 10,
});

Styles.loadStyles({
  "shadow-card": {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

// Optional: light / dark palettes (same keys in light and dark)
Scheme.loadSchemes({
  light: { screen: "#ffffff", text: "#0D0F12" },
  dark: { screen: "#0D0F12", text: "#FFFFFF" },
});
// Scheme.setScheme("light" | "dark" | "default") when you want to override system
```

### 3. Using `styles()` in components

`styles()` accepts one or more strings (split on spaces), arrays, and optional object forms (see source in `src/style.ts`). It returns an **array** of style objects suitable for React Native’s `style` prop.

```tsx
import React from "react";
import { View, Text } from "react-native";
import { styles } from "d-react-native-styles";

const Example = () => (
  <View style={styles("bg-primary p-3 rounded-2")}>
    <Text style={styles("text-white text-large font-weight-bold")}>
      Hello, d-react-native-styles
    </Text>
  </View>
);

export default Example;
```

After `Colors.loadColors({ primary: "..." })`, utilities like `bg-primary` and `text-primary` use those values. Typography presets from fonts include `h1`–`h5`, `text`, `text-small`, `text-medium`, `text-large`, `label`, etc. Font weight utilities use the **`font-weight-<value>`** pattern (e.g. `font-weight-bold`, `font-weight-700`), not `font-bold`.

### Utility classes

**Full reference:** [docs/STYLE_UTILITIES.md](docs/STYLE_UTILITIES.md) — every class family under `src/style/` (e.g. `font-size-0`…`font-size-99`, `line-height-0`…`line-height-50`, `font-weight-*`, padding/margin, borders, flex, position, width/height, shadow, image helpers, and custom tokens).

**Quick map:**

| Area | Module | Examples |
|------|--------|----------|
| Padding / margin | `src/style/_padding-margin.ts` | `p-0` … `p-10`, `m-3`, `px-2`, `mt-4` (numbers map to theme sizes, not Tailwind spacing) |
| Background | `src/style/_background.ts` | `bg-<colorKey>` (e.g. `bg-primary`, `bg-white`), `bg-transparent` |
| Text color | `src/style/_text.ts` | `text-<colorKey>` |
| Border radius | `src/style/_border.ts` | `rounded`, `rounded-0` … `rounded-4`, `rounded-pill`, directional variants like `rounded-top-2` |
| Typography | `src/style/_text.ts` + fonts | Presets: `h1`, `text`, `text-large`, …; sizes: `font-size-16`; weights: `font-weight-bold` |
| Flex, position, width/height, shadows, image | `src/style/*.ts` | Listed in [docs/STYLE_UTILITIES.md](docs/STYLE_UTILITIES.md) |

Default color keys are listed in `src/color/_colors-default.ts`; default size tokens in `src/size/_sizes-default.ts`.

### Customizing styles (summary)

- **Colors:** `Colors.loadColors({ key: "#hex" | "rgba(...)" })` — keys become `bg-*` and `text-*` (and border color utilities).
- **Fonts:** `Fonts.loadFonts(platformFontMap, optionalCustomPresets)` — second argument merges extra presets (objects of React Native text styles) into the same map used for class names like `h1`, `text`, your own keys such as `display`.
- **Sizes:** `Sizes.loadSizes({ ... })` — overrides tokens used by padding, margins, borders, etc. TypeScript users: keys align with `SizeKeyType` from the package.
- **Schemes:** `Scheme.loadSchemes({ light: { ... }, dark: { ... } })` — **light** and **dark** must define the **same keys** (the library logs an error if they differ). Use `Scheme.setScheme("light" | "dark" | "default")` to pin or follow the system when `default`.
- **Custom class names:** `Styles.loadStyles({ "my-class": { /* RN styles */ } })` then `styles("my-class")`.

## Main exports

| Export | Role |
|--------|------|
| `styles` | Build style arrays from utility / custom class strings. |
| `Colors` | Color palette; `loadColors` merges keys onto the shared instance. |
| `Scheme` | Light/dark color sets; `loadSchemes`, `setScheme`, `getScheme`. |
| `Fonts` | `loadFonts` for platform families + optional named presets. |
| `Sizes` | `loadSizes` for theme tokens (spacing, radii, etc.). |
| `Styles` | `loadStyles` for arbitrary extra class → style maps consumed by `styles()`. |

**Types** (from the package entry):

- `ColorKeyType` — built-in color keys plus `"transparent"` where applicable.
- `SizeKeyType` — keys of the default size map (what you can override with `loadSizes`).
- `FontKeyType` — top-level keys of the default font config shape (e.g. platform entries), **not** the typography class names (`h1`, `text`, …).

Import everything from the package root, for example:

`import { styles, Colors, Scheme, Fonts, Sizes, Styles } from "d-react-native-styles";`

## Available scripts (this repository)

These scripts are for **developing this library** (it includes a small React Native app), not for end-users of the published package:

- `npm run android` / `npm run ios` — run the example app.
- `npm start` — Metro bundler.
- `npm test` — Jest.
- `npm run lint` — ESLint.
- `npm run build` — emit `dist/` (TypeScript declarations + transpiled JS).

## License

This project does not currently include a `LICENSE` file in the repository. Add one when you publish (for example MIT), then document it here.

## Contributing

Contributions are welcome: issues and pull requests for fixes, docs, and new utilities are appreciated.
