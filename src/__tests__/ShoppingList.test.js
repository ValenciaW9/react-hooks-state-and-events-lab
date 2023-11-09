import React, { useState } from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import ShoppingList from '../components/ShoppingList'; // Update the file path to the correct location of ShoppingList.jsx

// Rest of your test code...
test("displays in 'light' mode when initialized", () => {
  render(<App />);
  expect(screen.getByRole('main')).toHaveClass('light');
});

test("changes to 'dark' mode when the button is clicked", () => {
  render(<App />);
  expect(screen.getByRole('main')).toHaveClass('light');

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole('main')).toHaveClass('dark');
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  render(<App />);
  expect(screen.getByRole('main')).toHaveClass('light');

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole('main')).toHaveClass('dark');

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole('main')).toHaveClass('light');
});