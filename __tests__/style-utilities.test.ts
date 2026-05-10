/**
 * Contract tests for built-in style class names under src/style/.
 * See docs/STYLE_UTILITIES.md for the full human-readable list.
 */

import {StyleSheet} from "react-native";
import {styles} from "../src/style";
import Styles from "../src/style/_style-custom";

const flat = (classString: string) =>
    StyleSheet.flatten(styles(classString).filter(Boolean));

describe("_text.ts", () => {
    it.each([
        [0, 0],
        [1, 1],
        [14, 14],
        [99, 99],
    ])("font-size-%i maps to fontSize %i", (n, expected) => {
        expect(flat(`font-size-${n}`)).toMatchObject({fontSize: expected});
    });

    it.each([
        [0, 0],
        [25, 25],
        [50, 50],
    ])("line-height-%i maps to lineHeight %i", (n, expected) => {
        expect(flat(`line-height-${n}`)).toMatchObject({lineHeight: expected});
    });

    it.each([
        ["font-weight-bold", "bold"],
        ["font-weight-700", "700"],
        ["font-weight-normal", "normal"],
    ])("%s sets fontWeight %s", (cls, weight) => {
        expect(flat(cls)).toMatchObject({fontWeight: weight});
    });

    it("text color uses Colors", () => {
        expect(flat("text-primary")).toMatchObject({
            color: expect.any(String),
        });
    });

    it("text alignment", () => {
        expect(flat("text-center")).toMatchObject({textAlign: "center"});
    });

    it("text decoration", () => {
        expect(flat("text-underline")).toMatchObject({
            textDecorationLine: "underline",
        });
    });

    it("text transform", () => {
        expect(flat("text-uppercase")).toMatchObject({
            textTransform: "uppercase",
        });
    });

    it("typography preset h1 exists", () => {
        const s = flat("h1");
        expect(s.fontSize).toBeDefined();
        expect(s.fontFamily).toBeDefined();
    });
});

describe("_padding-margin.ts", () => {
    it.each([
        ["p-0", "padding"],
        ["pl-2", "paddingLeft"],
        ["mt-3", "marginTop"],
        ["mx-1", "marginHorizontal"],
    ])("%s sets %s", (cls, key) => {
        expect(flat(cls)).toEqual(
            expect.objectContaining({
                [key]: expect.anything(),
            }),
        );
    });
});

describe("_border.ts", () => {
    it("border width default class", () => {
        expect(flat("border")).toMatchObject({
            borderWidth: expect.any(Number),
            borderColor: expect.any(String),
        });
    });

    it("directional border width", () => {
        expect(flat("border-top-2")).toMatchObject({
            borderTopWidth: expect.any(Number),
        });
    });

    it("border radius scale", () => {
        expect(flat("rounded-2")).toMatchObject({
            borderRadius: expect.any(Number),
        });
    });

    it("border color from palette", () => {
        expect(flat("border-primary")).toMatchObject({
            borderColor: expect.any(String),
        });
    });

    it("rounded-pill", () => {
        expect(flat("rounded-pill")).toMatchObject({borderRadius: 999});
    });
});

describe("_background.ts", () => {
    it("bg-primary and bg-transparent", () => {
        expect(flat("bg-primary")).toMatchObject({
            backgroundColor: expect.any(String),
        });
        expect(flat("bg-transparent")).toMatchObject({
            backgroundColor: "transparent",
        });
    });
});

describe("_flex.ts", () => {
    it("flex-1 and flex-row", () => {
        expect(flat("flex-1")).toMatchObject({flex: 1});
        expect(flat("flex-row")).toMatchObject({flexDirection: "row"});
    });

    it("justify and align shortcuts", () => {
        expect(flat("justify-center")).toMatchObject({
            justifyContent: "center",
        });
        expect(flat("align-center")).toMatchObject({alignItems: "center"});
    });
});

describe("_position.ts", () => {
    it("position modes", () => {
        expect(flat("position-absolute")).toMatchObject({
            position: "absolute",
        });
    });

    it("inset utilities", () => {
        expect(flat("top-10")).toMatchObject({top: 10});
        expect(flat("right-0")).toMatchObject({right: 0});
    });

    it("zIndex scale", () => {
        expect(flat("zIndex-5")).toMatchObject({zIndex: 5});
    });
});

describe("_width-height.ts", () => {
    it("pixel width / height / size", () => {
        expect(flat("width-100")).toMatchObject({width: 100});
        expect(flat("height-50")).toMatchObject({height: 50});
        expect(flat("size-20")).toMatchObject({width: 20, height: 20});
    });

    it("percentage w / h", () => {
        expect(flat("w-50")).toMatchObject({width: "50%"});
        expect(flat("h-100")).toMatchObject({height: "100%"});
    });

    it("full and auto aliases", () => {
        expect(flat("w-full")).toMatchObject({width: expect.any(Number)});
        expect(flat("h-auto")).toMatchObject({height: "auto"});
    });
});

describe("_shadow.ts", () => {
    it("shadow preset", () => {
        expect(flat("shadow")).toMatchObject({
            shadowColor: expect.any(String),
        });
    });
});

describe("_image.ts", () => {
    it("resize modes", () => {
        expect(flat("resize-cover")).toMatchObject({resizeMode: "cover"});
    });

    it("image-reg and image-square presets", () => {
        expect(flat("image-reg-medium")).toMatchObject({
            height: expect.any(Number),
        });
        expect(flat("image-square-small")).toMatchObject({
            width: expect.any(Number),
            height: expect.any(Number),
        });
    });
});

describe("_style-custom.ts via styles()", () => {
    it("resolves Styles.loadStyles after registration", () => {
        Styles.loadStyles({
            "test-util-abc": {opacity: 0.42},
        });
        expect(flat("test-util-abc")).toMatchObject({opacity: 0.42});
    });
});
