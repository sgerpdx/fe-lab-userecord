/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('behaves as intended', async () => {
    render(<App />);

    // testing for basic elements:
    const title = await screen.getByText(
      'Select a Color to Change the Square:'
    );
    expect(title).toMatchSnapshot();

    const undoButton = await screen.findByRole('button', {
      name: 'Undo Selection',
    });
    expect(undoButton).toMatchSnapshot();
    expect(undoButton).toMatchSnapshot();

    const redoButton = await screen.findByRole('button', {
      name: 'Redo Selection',
    });
    expect(redoButton).toMatchSnapshot();

    // testing for behaviors:
    const colorInput = await screen.getByRole('colorInput', {
      name: 'Color Selector',
    });
    const colorBox = await screen.getByRole('colorBox', {
      name: 'Color Display',
    });
    //const undo = await screen.getByRole('button', { name: 'undo' });

    fireEvent.input(colorInput, { target: { value: '#2b00ff' } });
    expect(colorBox).toHaveStyle('background-color: #2b00ff');

    fireEvent.input(colorInput, { target: { value: '#00ff2a' } });
    expect(colorBox).toHaveStyle('background-color: #00ff2a');

    userEvent.click(undoButton);
    expect(colorBox).toHaveStyle('background-color: #2b00ff');

    userEvent.click(redoButton);
    expect(colorBox).toHaveStyle('background-color: #00ff2a');
  });
});
