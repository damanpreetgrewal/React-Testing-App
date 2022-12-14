import App from './App';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const renderApp = () => render(<App />);

afterEach(() => {
  cleanup();
});

describe('Group React Tests in a Test Suite using describe ', () => {
  // Test 1
  test('initial UI is rendered as expected', () => {
    let { getByTestId, queryByTestId } = renderApp();
    expect(getByTestId('app-input').value).toBeFalsy();
    expect(getByTestId('submit-button')).toHaveTextContent('Add Customer');
    expect(queryByTestId('customer-list')).toBe(null);
    expect(queryByTestId('list-item0')).toBe(null);
  });

  // Test 2
  test('button adds customer', () => {
    let { getByTestId } = renderApp();
    const input = getByTestId('app-input');
    fireEvent.input(input, {
      target: { value: 'Steve' },
    });
    //1st way to Click a button using fireEvent
    // const addButton = getByTestId('submit-button');
    // fireEvent.click(addButton);

    //2nd way to Click a button using userEvent
    const addButton = screen.getByRole('button');
    userEvent.click(addButton);

    const firstListElement = getByTestId('list-item0');
    expect(firstListElement).toHaveTextContent('Steve');
  });

  // Test 3
  test('button adds multiple customer', () => {
    let { getByTestId } = renderApp();
    const input = getByTestId('app-input');
    fireEvent.input(input, {
      target: { value: 'Steve' },
    });
    const addButton = getByTestId('submit-button');
    fireEvent.click(addButton);
    fireEvent.input(input, {
      target: { value: 'Bob' },
    });
    fireEvent.click(addButton);
    fireEvent.input(input, {
      target: { value: 'John' },
    });
    fireEvent.click(addButton);
    expect(getByTestId('customer-list')).toBeTruthy();
    expect(getByTestId('list-item0')).toHaveTextContent('Steve');
    expect(getByTestId('list-item1')).toHaveTextContent('Bob');
    expect(getByTestId('list-item2')).toHaveTextContent('John');
  });

  //Test 4
  test('after adding customer input has no value', () => {
    let { getByTestId } = renderApp();
    const input = getByTestId('app-input');
    fireEvent.input(input, {
      target: { value: 'Steve' },
    });
    const addButton = getByTestId('submit-button');
    fireEvent.click(addButton);
    expect(getByTestId('customer-list')).toBeTruthy();
    expect(getByTestId('list-item0')).toHaveTextContent('Steve');
    expect(getByTestId('app-input').value).toBeFalsy();
  });

  //Test 5
  test('no customer added on empty input', () => {
    let { getByTestId, queryByTestId } = renderApp();
    const input = getByTestId('app-input');
    fireEvent.input(input, {
      target: { value: '' },
    });
    const addButton = getByTestId('submit-button');
    fireEvent.click(addButton);
    expect(queryByTestId('customer-list')).toBe(null);
    expect(queryByTestId('list-item0')).toBe(null);
  });
});
