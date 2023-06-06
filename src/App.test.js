import {  render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
   const mainHeading = screen.getByRole("heading", {level: 1});
   const textbOX = screen.getByRole("textbox", {name: "Name"});
   const textArea = screen.getByRole("textbox", {name: "Address"})
   expect(mainHeading).toBeInTheDocument();
   expect(textbOX).toBeInTheDocument();
   expect(textArea).toBeInTheDocument();
});
