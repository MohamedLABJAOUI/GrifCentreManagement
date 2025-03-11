import { render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("renders the button with correct text", () => {
    render(<LoginForm />);
    const buttonElement = screen.getByText(/Se Connecter/i);
    expect(buttonElement).toBeInTheDocument();
});
