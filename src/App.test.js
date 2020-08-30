import {MockedProvider} from "@apollo/client/testing";
import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("works",() => {
    const app = render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
  });
});
