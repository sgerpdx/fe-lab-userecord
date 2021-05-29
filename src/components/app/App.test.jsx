/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
//import { rest } from 'msw';
//import { setupServer } from 'msw/node';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('behaves as intended', async () => {
    render(<App />);

    const title = await screen.getByText(
      'Select a Color to Change the Square:'
    );
    expect(title).toMatchSnapshot();

    const redoButton = await screen.findByRole('button', {
      name: 'Undo Selection',
    });
    expect(redoButton).toMatchSnapshot();

    const undoButton = await screen.findByRole('button', {
      name: 'Redo Selection',
    });
    expect(undoButton).toMatchSnapshot();

    // userEvent.click(screen.getByText('undo'));
    // expect(
    //   screen
    //     .findByRole('heading', { name: 'User Feedback' })
    //     .toEqual('🤖 -- no previous records')
    // );

    //per the RTL docs there is no support for <input type="color">
  });
});
