import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

test("the <li> does not have a className when initialized", () => {
  render(<Item name="Milk" category="Dairy" />);
  expect(screen.getByRole("listitem")).toBeInTheDocument();
  expect(screen.getByRole("listitem").className).not.toContain("in-cart");
});

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  render(<Item name="Milk" category="Dairy" />);
  fireEvent.click(screen.getByText(/ Cart/));
  expect(screen.getByRole("listitem", { className: "in-cart" })).toBeInTheDocument();
});