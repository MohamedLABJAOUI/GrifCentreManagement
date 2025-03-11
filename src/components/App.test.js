import { render, screen } from "@testing-library/react";
import App from "../App";


test("renders welcome text", () => {
    render(<App />);
    const titleElement = screen.getByText(/Bienvenue au Centre Grif/i);
    expect(titleElement).toBeInTheDocument();
});

