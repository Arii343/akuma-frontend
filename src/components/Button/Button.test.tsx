import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Given a Button component", () => {
  describe("When it renders", () => {
    test("Then it should show a button with the text 'delete'", () => {
      const onClick = vi.fn();
      const className = "button";
      const type = "button";
      const buttonText = "delete";

      render(
        <Button onClick={onClick} className={className} type={type}>
          {buttonText}
        </Button>
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
