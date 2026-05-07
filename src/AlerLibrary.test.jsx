import { render, screen } from "@testing-library/react";
import AlertLibrary from "./AlertLibrary";

test("render the component Alert", () => {
  render(<AlertLibrary />);
  expect(screen.getByText(/Hey, nice to see you/i)).toBeInTheDocument();
});
