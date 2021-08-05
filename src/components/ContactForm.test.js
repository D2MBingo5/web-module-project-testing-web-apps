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
    const renderApp = rtl.render(
        <App />
    )
    const h1contact = renderApp.queryByText('Contact Form')
    expect(h1contact).toBeInTheDocument();
    expect(h1contact).toBeTruthy();
    expect(h1contact).toHaveTextContent('Contact Form');

    // console.log(h1contact)
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});