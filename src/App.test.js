import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import App, { ALL_PEOPLE, ALL_PEOPLE_TWO } from "./App";
import { render, wait } from "@testing-library/react";

describe("App", () => {
  it("works", async () => {
    const mocks = [
      {
        request: { query: ALL_PEOPLE },
        // result: { data: { people: [{ id: "1", name: "buck" }] } },
        error: new Error("foo")
      },
      {
        request: { query: ALL_PEOPLE_TWO, variables: {} },
        error: new Error("foo")
      },
    ];

    const { getByTestId, baseElement } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    await wait();
    await wait();

    // expect(baseElement).toMatchInlineSnapshot();

    const skip = getByTestId("skip");
    skip.click();

    await wait();
    await wait();
  });
});
