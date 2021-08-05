import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../App'

test('renders without errors', ()=>{
    const renderApp = rtl.render(
        <App />
    )
    // console.log(renderApp.debug())
});

test('renders the contact form header', ()=> {
    render(<App />)

    const h1contact = screen.queryByText(/contact form/i)
    
    expect(h1contact).toBeInTheDocument();
    expect(h1contact).toBeTruthy();
    expect(h1contact).toHaveTextContent(/contact form/i);

    // console.log(h1contact)
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render(<App />)

    const firstNameInput = screen.getByLabelText(/First Name*/i)
    // console.log(firstNameInput)
    userEvent.type(firstNameInput, '1234')

    const err = screen.getByTestId(/error/i)

    expect(err).toBeInTheDocument();
    // console.log(err)

    userEvent.type(firstNameInput, '5')
    // console.log(firstNameInput)

    expect(err).not.toBeInTheDocument();
    // console.log(firstNameInput)
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render(<App />)

    const submitBtn = screen.getByRole('button')
    // console.log(submitBtn)

    userEvent.click(submitBtn)

    expect(screen.queryAllByTestId('error')).toHaveLength(3)
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render(<App />)

    const firstNameInput = screen.getByLabelText(/First Name*/i)
    const lastNameInput = screen.getByLabelText(/Last Name*/i)
    const submitBtn = screen.getByRole('button')

    userEvent.type(firstNameInput, '12345')
    userEvent.type(lastNameInput, '12345')
    userEvent.click(submitBtn)

    expect(screen.queryAllByTestId('error')).toHaveLength(1)
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    render(<App />)

    const emailInput = screen.getByLabelText(/Email*/i)    

    userEvent.type(emailInput, 'rerere')

    const err = screen.getByTestId(/error/i)
    console.log(err)
    console.log(err.textContent)

    expect(err).toBeInTheDocument()
    // I do not know how to target the text content despite being able to display it

});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});