import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Welcome from './Welcome'

describe('Welcome', () => {
    test("renders hello world", () => {
        render(<Welcome />)
        const hello_World = screen.getByText("Hello", { exact: false })
        expect(hello_World).toBeInTheDocument()
    });

    test("renders Good morning", () => {
        render(<Welcome />)
        const hello_World = screen.getByText("Good", { exact: false })
        expect(hello_World).toBeInTheDocument()
    });

    test('renders if button is not clicked', () => {
        render(<Welcome />)
        const notclicked = screen.getByText('morning', { exact: false })
        expect(notclicked).toBeInTheDocument()
    });

    test('renders if button is clicked', () => {
        render(<Welcome />)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const changeText = screen.getByText('Night', { exact: false })
        expect(changeText).toBeInTheDocument()
    });

    test('removes good morning when button is clicked', () => {
        render(<Welcome />)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const changeText = screen.queryByText('morning', { exact: false })
        expect(changeText).toBeNull()
    })
})

