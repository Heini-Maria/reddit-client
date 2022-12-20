import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("renders the header", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const text = screen.getByText(/Diddit/);
    expect(text).toBeInTheDocument();
  });
  it("doesn't render the comments", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const comments= screen.queryByText("Comments");
    expect(comments).not.toBeInTheDocument();
  });
});