import { hello } from "./hello_world";

describe("hello function", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});
