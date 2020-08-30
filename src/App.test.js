import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import App, { ALL_PEOPLE } from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("works", () => {
    const mocks = [
      {
        request: { query: ALL_PEOPLE, variables: {} },
        result: { data: { people: { id: "1", name: "Buck" } } },
      },
    ];

    const app = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
  });
});
