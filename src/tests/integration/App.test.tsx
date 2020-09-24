import React from "react";
import { render } from "@testing-library/react";
import App from "../../App";

test("when App is first viewed, renders ", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Majority Wins/i);
  expect(linkElement).toBeInTheDocument();
});
