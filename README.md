# d-react-native-styles

## Project Description

`d-react-native-styles` is a utility-first styling library for React Native applications. It allows developers to rapidly build custom user interfaces by composing utility classes directly in their components, similar to frameworks like Tailwind CSS. This library provides a flexible way to manage and customize styles, including colors, fonts, and sizes, to maintain a consistent design language across your application.

## Installation

Add `d-react-native-styles` to your project using npm or yarn:

```bash
npm install d-react-native-styles
```

or

```bash
yarn add d-react-native-styles
```

## Usage Guide

### Basic Usage

The core of this library is the `styles()` function, which you can import and use to apply utility classes to your React Native components.

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'd-react-native-styles';

const MyComponent = () => {
  return (
    <View style={styles('bg-primary p-4 rounded-lg')}>
      <Text style={styles('text-white text-lg font-bold')}>
        Hello, d-react-native-styles!
      </Text>
    </View>
  );
};

export default MyComponent;
```

This example applies a primary background color, padding, and rounded corners to the `View`, and styles the `Text` with white color, large font size, and bold font weight.

### Customizing Styles

`d-react-native-styles` allows you to customize the default theme (colors, fonts, sizes) to match your application's design requirements.

**1. Customizing Colors:**

You can add or override default colors using the `Colors.loadColors()` method. It's recommended to do this at the entry point of your application (e.g., `App.js` or `index.js`).

```javascript
// styleConfig.js (or any configuration file you prefer)
import { Colors } from 'd-react-native-styles';

Colors.loadColors({
  primary: '#007bff', // Override default primary
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  // Add your custom colors
  'custom-blue': '#3498db',
  'brand-red': '#e74c3c',
});

// Import this file in your main App.js or index.js
// import './styleConfig';
```

**2. Customizing Fonts:**

Fonts can be customized using the `Fonts.loadFonts()` method. This method takes two arguments: `fonts` (a platform-specific font configuration) and an optional `customFonts` object for more direct font style definitions. You would typically define your base font families within the platform-specific configuration and then can add or override specific text styles (like `h1`, `text`, etc.) using `customFonts`.

```javascript
// styleConfig.js
import { Platform } from 'react-native';
import { Fonts } from 'd-react-native-styles';

const customFontConfig = {
  [Platform.OS]: { // You can also specify 'ios' or 'android'
    family: {
      regular: 'YourApp-Regular', // Replace with your actual font family names
      bold: 'YourApp-Bold',
      medium: 'YourApp-Medium',
      semiBold: 'YourApp-SemiBold',
      light: 'YourApp-Light',
    },
    baseFontSize: 16, // Optional: define a base font size
  }
};

const additionalFontStyles = {
  'display': { // Example of a custom font style
    fontSize: 32,
    fontFamily: customFontConfig[Platform.OS].family.bold, // Using one of the defined families
  },
  // You can override default styles like h1, text, etc. here too
  'h1': {
    fontSize: 28,
    fontFamily: customFontConfig[Platform.OS].family.bold,
  }
};

Fonts.loadFonts(customFontConfig, additionalFontStyles);

// Import this file in your main App.js or index.js
// import './styleConfig';
```
This allows for fine-grained control over font families and styles used by the utility classes.

**3. Customizing Sizes:**

Sizes (for padding, margin, width, height, font sizes, etc.) can be customized using `Sizes.loadSizes()`.

```javascript
// styleConfig.js
import { Sizes } from 'd-react-native-styles';

Sizes.loadSizes({
  'xs': 8,
  'sm': 12,
  'md': 16,
  'lg': 24,
  'xl': 32,
  // Add your custom sizes
  'icon-sm': 20,
  'button-height': 48,
});
```

Make sure to import your `styleConfig.js` (or equivalent) early in your application lifecycle, for example, in your root `index.js` or `App.tsx`:

```javascript
// index.js or App.tsx
import './styleConfig'; // Path to your configuration file
// ... rest of your app initialization
```

### Main Exports

The library exports several components and types to give you full control over the styling system:

*   **`styles` (function):** The primary function used to apply utility classes to your components.
*   **`Colors` (object):** Manages the color palette. Use `Colors.loadColors({...})` to customize. Contains predefined color values.
*   **`Scheme` (object):** Manages color schemes (e.g., for light/dark mode support). Use `Scheme.loadSchemes({...})` to define schemes and `Scheme.setScheme('light' | 'dark' | 'default')` to switch between them.
*   **`Fonts` (object):** Manages font families and styles. Use `Fonts.loadFonts({...})` to customize.
*   **`Sizes` (object):** Manages size scales (for padding, margins, font sizes, etc.). Use `Sizes.loadSizes({...})` to customize.
*   **`Styles` (object):** Provides access to pre-compiled style objects for custom components or more complex style compositions. This is exported from `d-react-native-styles/dist/style/_style-custom` and contains the custom styles you define.
*   **Types:**
    *   `ColorKeyType`: TypeScript type for valid color keys.
    *   `SizeKeyType`: TypeScript type for valid size keys.
    *   `FontKeyType`: TypeScript type for valid font keys.

These exports allow for advanced customization and integration with your project's specific needs.

## Available Scripts

This project includes several scripts defined in `package.json` to help with development:

*   `npm run android`: Runs the application on an Android emulator or connected device.
*   `npm run ios`: Runs the application on an iOS simulator or connected device.
*   `npm start`: Starts the Metro bundler for React Native.
*   `npm test`: Runs tests using Jest.
*   `npm run lint`: Lints the codebase using ESLint to check for code quality and style issues.
*   `npm run build`: Builds the library for distribution, creating JavaScript files and type definitions in the `dist/` directory.

You can also use `yarn <script_name>` (e.g., `yarn android`).

## License

This project does not currently have a LICENSE file. It is recommended to add one. For open source projects, consider licenses like MIT, Apache 2.0, or GPL, depending on your requirements.

Once a license is chosen, you can add a section like this:

`This project is licensed under the [Your License Name Here] - see the LICENSE.md file for details.`

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or find any bugs, please feel free to open an issue or submit a pull request.
