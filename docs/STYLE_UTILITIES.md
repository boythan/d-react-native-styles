# Style utilities reference (`src/style`)

Pass class names to `styles()` (space-separated in a string, or multiple arguments). Values for colors come from **`Colors`** (extend with `Colors.loadColors`). Padding, margin, border width, and border radius numbers map to **`Sizes`** (extend with `Sizes.loadSizes`). Typography presets come from **`Fonts.fontClass`** (extend with `Fonts.loadFonts` second argument).

**Space-separated strings:** `styles()` splits each string on spaces. Any utility whose **registered name itself contains a space** cannot be selected that way; use `Styles.loadStyles`, a separate `styles()` argument, or an inline style. (Example: the built-in combined text-decoration key is documented below.)

---

## `_text.ts` — text color, alignment, decoration, transform, size, line height, weight, font presets

### Text color

Pattern: **`text-<colorKey>`** for every key on the shared `Colors` object (including keys you add with `Colors.loadColors`).

Built-in keys (unless you override them) include: `primary`, `secondary`, `dark`, `light`, `white`, `black`, `black08`, `black04`, `error`, `success`, `warning`, `disabled`, `muted`, `red`, `green`, `blue`, `yellow`, `purple`, `pink`, `cyan`, `grey`.

Examples: `text-primary`, `text-white`, `text-error`.

### Text align

Pattern: **`text-<value>`** where `<value>` is one of:

| Class | React Native `textAlign` |
|-------|--------------------------|
| `text-auto` | `auto` |
| `text-start` | `left` |
| `text-left` | `left` |
| `text-end` | `right` |
| `text-right` | `right` |
| `text-center` | `center` |
| `text-justify` | `justify` |

### Text decoration

Pattern: **`text-<value>`**

| Class | `textDecorationLine` |
|-------|----------------------|
| `text-none` | `none` |
| `text-underline` | `underline` |
| `text-line-through` | `line-through` |

There is also a generated entry for both underline and line-through; its internal name contains a **space**, so it is not practical to pass through `styles("...")` as a single token. Use `text-underline` / `text-line-through` as needed, or `Styles.loadStyles` with one combined style object.

### Text transform

Pattern: **`text-<value>`**

| Class | `textTransform` |
|-------|-----------------|
| `text-capitalize` | `capitalize` |
| `text-uppercase` | `uppercase` |
| `text-lowercase` | `lowercase` |

### Font size (numeric literals)

Pattern: **`font-size-<n>`** for **n = 0 … 99** (pixel font size).

Examples: `font-size-0`, `font-size-14`, `font-size-99`.

### Line height (numeric literals)

Pattern: **`line-height-<n>`** for **n = 0 … 50** (pixel line height).

Examples: `line-height-0`, `line-height-20`, `line-height-50`.

### Font weight

Pattern: **`font-weight-<value>`**

| Class | `fontWeight` |
|-------|----------------|
| `font-weight-100` … `font-weight-900` | `"100"` … `"900"` |
| `font-weight-normal` | `normal` |
| `font-weight-bold` | `bold` |

### Typography presets (`Fonts`)

These class names come from `Fonts.fontClass` after `Fonts.loadFonts` runs (defaults ship with the library):

| Class | Role |
|-------|------|
| `h0` | Largest heading |
| `h1`, `h2`, `h3`, `h4`, `h5` | Headings |
| `label` | Label style |
| `text-large`, `text-medium`, `text`, `text-small` | Body copy scale |
| *(custom)* | Any key you pass in the **second** argument to `Fonts.loadFonts` |

---

## `_padding-margin.ts` — padding and margin

### Padding

| Prefix | Property |
|--------|----------|
| `p` | `padding` |
| `pl` | `paddingLeft` |
| `pt` | `paddingTop` |
| `pr` | `paddingRight` |
| `pb` | `paddingBottom` |
| `px` | `paddingHorizontal` |
| `py` | `paddingVertical` |

### Margin

| Prefix | Property |
|--------|----------|
| `m` | `margin` |
| `ml` | `marginLeft` |
| `mt` | `marginTop` |
| `mr` | `marginRight` |
| `mb` | `marginBottom` |
| `mx` | `marginHorizontal` |
| `my` | `marginVertical` |

### Scale suffix

Suffix **`-<k>`** where **k** is **`0` … `10`**. Each number maps to a value from `Sizes` (see `MARGIN_PADDING_VALUES` in `_padding-margin.ts`): not Tailwind spacing.

Examples: `p-0`, `p-3`, `px-2`, `mt-4`, `m-10`.

---

## `_border.ts` — border color, width, radius, dashed, pill

### Border color

Pattern: **`border-<colorKey>`** for each `Colors` key (same list idea as `text-<colorKey>`).

### Border width

Patterns combine a **side** variant with a **width index**.

**Side variants:** `border`, `border-top`, `border-bottom`, `border-left`, `border-right`, `border-start`, `border-end`  
(`border-start` / `border-end` map to left/right width in this library.)

**Width index:** omit suffix for default hairline, or **`-0` … `-4`**:

| Class | Meaning (default `Sizes`) |
|-------|---------------------------|
| `border` | Default width (`borderTiny`) + `borderColor` grey |
| `border-0` | width `0` |
| `border-1` | `borderSmall` |
| `border-2` | `borderMedium` |
| `border-3` | `borderLarge` |
| `border-4` | `borderXLarge` |

Examples: `border-top-2`, `border-left-1`.

### Border radius

**Corner / edge variants:** `rounded`, `rounded-top-left`, `rounded-top-right`, `rounded-bottom-left`, `rounded-bottom-right`, `rounded-top`, `rounded-bottom`, `rounded-left`, `rounded-right`, `rounded-start`, `rounded-end`.

**Radius index:** none, **`-0` … `-4`**, or **`-pilled`** (value `999` in theme; note the spelling **`pilled`** in code).

| Class | Typical use |
|-------|-------------|
| `rounded` | Default small radius (`borderRadiusTiny`) |
| `rounded-0` … `rounded-4` | Step through `borderRadiusSmall` … `borderRadiusXLarge` |
| `rounded-pilled` | Fully rounded ends (`999`) |
| `rounded-pill` | Fixed `borderRadius: 999` (separate static rule) |

Directional examples: `rounded-top-2`, `rounded-left-3`.

### Other

| Class | Notes |
|-------|--------|
| `border-dashed` | Dashed border using `borderSmall` and theme `grey` |

---

## `_background.ts` — background color

| Class | Notes |
|-------|--------|
| `bg-transparent` | Transparent background |
| `bg-<colorKey>` | One class per `Colors` key |

Examples: `bg-primary`, `bg-white`.

---

## `_flex.ts` — flex, display, direction, wrap, alignment, justify

### Numeric flex

**`flex-1`** … **`flex-10`** — `flex: <n>`.

### Display

| Class | `display` |
|-------|-----------|
| `display-flex` | `flex` |
| `display-none` | `none` |

### Flex direction / wrap

| Class |
|-------|
| `flex-row`, `flex-row-reverse`, `flex-column`, `flex-column-reverse` |
| `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse` |

### Shortcuts

| Class | Effect |
|-------|--------|
| `flex-center` | `justifyContent` + `alignItems` center |
| `flex-center-y` | row + `alignItems` center |
| `flex-center-x` | column + `alignItems` center |

### Align items

| Class |
|-------|
| `align-center`, `align-items-center` |
| `align-end`, `align-items-end` |
| `align-start`, `align-items-start` |
| `align-base`, `align-items-base` |
| `align-stretch`, `align-items-stretch` |

### Align self

| Class |
|-------|
| `align-self-center`, `align-self-end`, `align-self-start`, `align-self-base`, `align-self-stretch` |

### Justify content (long and short names)

| Long | Short |
|------|--------|
| `justify-content-center` | `justify-center` |
| `justify-content-end` | `justify-end` |
| `justify-content-start` | `justify-start` |
| `justify-content-between` | `justify-between` |
| `justify-content-evenly` | `justify-evenly` |
| `justify-content-around` | `justify-around` |

---

## `_position.ts` — position and offsets

| Class | Effect |
|-------|--------|
| `position-relative` | `position: "relative"` |
| `position-absolute` | `position: "absolute"` |

### Inset offsets

For **`right`**, **`left`**, **`top`**, **`bottom`**: **`{side}-{n}`** with **n = 0 … 100** (logical pixels).

Examples: `top-0`, `right-16`, `bottom-100`, `left-50`.

### z-index

**`zIndex-1`** … **`zIndex-10`** — `zIndex: <n>`.

---

## `_width-height.ts` — width, height, size, percentages, full screen

### Fixed pixel width / height / square

- **`width-<n>`** for **n = 0, 5, 10, … 200** (step 5).
- **`height-<n>`** same pattern.
- **`size-<n>`** — sets both `width` and `height` to **n** (same step 5).

### Percentage width / height

| Width class | Height class | Value |
|-------------|--------------|--------|
| `w-0`, `w-25`, `w-50`, `w-75`, `w-100` | `h-0`, `h-25`, `h-50`, `h-75`, `h-100` | `"0%"` … `"100%"` |

### Full screen / auto aliases

| Class | Maps to |
|-------|---------|
| `h-full`, `height-full` | `height: Sizes.screenHeight` |
| `w-full`, `width-full` | `width: Sizes.screenWidth` |
| `h-auto`, `height-auto` | `height: "auto"` |
| `w-auto`, `width-auto` | `width: "auto"` |

---

## `_shadow.ts` — shadow preset

| Class | Notes |
|-------|--------|
| `shadow` | iOS shadow + Android `elevation` |

---

## `_image.ts` — image height presets and resize mode

### `resizeMode` (via `generateStyleValue`)

| Class | `resizeMode` |
|-------|----------------|
| `resize-contain` | `contain` |
| `resize-cover` | `cover` |
| `resize-stretch` | `stretch` |
| `resize-repeat` | `repeat` |
| `resize-center` | `center` |

### Rectangular image heights (fixed `baseSize = 16` in module)

| Class | Height |
|-------|--------|
| `image-reg-tiny` | `16` |
| `image-reg-xx-small` | `16 * 1.4` |
| `image-reg-x-small` | `16 * 2` |
| `image-reg-small` | `16 * 3` |
| `image-reg-medium` | `16 * 4` |
| `image-reg-large` | `16 * 5` |
| `image-reg-x-large` | `16 * 6` |
| `image-reg-xx-large` | `16 * 7` |

### Square images (width and height equal)

| Class | Size (× `baseSize` 16) |
|-------|-------------------------|
| `image-square-tiny` | ×1 |
| `image-square-xx-small` | ×1.4 |
| `image-square-x-small` | ×2 |
| `image-square-small` | ×3 |
| `image-square-medium` | ×4 |
| `image-square-large` | ×5 |
| `image-square-x-large` | ×6 |
| `image-square-xx-large` | ×7 |

---

## `_style-custom.ts` — your own classes

Use **`Styles.loadStyles({ "my-token": { ... } })`** then **`styles("my-token")`**. See README for setup order.

---

## Source map

| File | Responsibility |
|------|------------------|
| `_text.ts` | Color, align, decor, transform, `font-size-*`, `line-height-*`, `font-weight-*`, font presets |
| `_padding-margin.ts` | `p*`, `m*` utilities |
| `_border.ts` | `border*`, `rounded*` |
| `_background.ts` | `bg-*` |
| `_flex.ts` | Flexbox and layout helpers |
| `_position.ts` | `position-*`, `top-*` / `right-*` / `bottom-*` / `left-*`, `zIndex-*` |
| `_width-height.ts` | `width-*`, `height-*`, `size-*`, `w-*`, `h-*`, full/auto |
| `_shadow.ts` | `shadow` |
| `_image.ts` | `resize-*`, `image-reg-*`, `image-square-*` |
| `_style-custom.ts` | Runtime custom registry (merged in `style.ts`) |
