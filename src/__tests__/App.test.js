
import React, { useState } from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import ShoppingList from './path/to/ShoppingList'; // Replace with the correct path to the ShoppingList component

// Rest of your test code...
test("displays only items that match the selected category", () => {
  render(<ShoppingList items={testData} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });

  expect(screen.getAllByRole("listitem")).toHaveLength(2);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
    "mocha": "^10.2.0"
  });

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
});