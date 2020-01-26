import { renderHook } from "@testing-library/react-hooks";
import useNoSleep from ".";

const mockCalls: string[] = [];
const mockDisable = () => mockCalls.push("disable");
const mockEnable = () => mockCalls.push("enable");

jest.mock("nosleep.js", () => {
    return jest.fn().mockImplementation(() => {
        return { disable: mockDisable, enable: mockEnable };
    });
});

describe(useNoSleep, () => {
    beforeEach(() => {
        mockCalls.length = 0;
    });

    it("does not enable NoSleep when started disabled", () => {
        renderHook(() => useNoSleep(false));

        expect(mockCalls).toEqual([]);
    });

    it("enables NoSleep when started enabled", () => {
        renderHook(() => useNoSleep(true));

        expect(mockCalls).toEqual(["enable"]);
    });

    it("disables NoSleep when enabled switches to false", async () => {
        const rendered = renderHook<boolean, void>((enabled = true) =>
            useNoSleep(enabled),
        );

        rendered.rerender(false);

        expect(mockCalls).toEqual(["enable", "disable"]);
    });

    it("enables NoSleep when enabled switches to true", async () => {
        const rendered = renderHook<boolean, void>((enabled = false) =>
            useNoSleep(enabled),
        );

        rendered.rerender(true);

        expect(mockCalls).toEqual(["enable"]);
    });
});
