import { render, screen } from "@testing-library/react";
import PageHome from "../pages/home";

describe("Test PageHome", () => {
    test("initial render", () => {
        render(<PageHome />)
        expect(screen.getByText(/Déjanos tus datos/i)).toBeTruthy()
        expect(screen.getByText(/¿Tienes alguna duda?/i)).toBeTruthy()

    })


})