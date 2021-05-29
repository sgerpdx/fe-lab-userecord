/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const avatarServer = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json(characterData));
    }
  )
);

const colorRecords = [' #FF0000', '#2b00ff', '#00ff2a'];
const newValue = '#00eeff';
const counter = 3;
const editCounter = 1;

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
    // const colorDiv = await screen.getByRole('colorbox');
    expect(undoButton).toMatchSnapshot();
    // userEvent.click(undoButton);
    // expect(colorDiv.backgroundColor).toEqual(colorRecords[0]);

    // return waitFor(() => {
    //   expect(colorRecords).toEqual([
    //     ' #FF0000',
    //     '#2b00ff',
    //     '#00ff2a',
    //     '#00eeff',
    //   ]);
    // });

    //per the RTL docs there is no support for <input type="color">
  });
});
