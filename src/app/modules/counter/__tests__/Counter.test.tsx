import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { act } from 'react-dom/test-utils';

import Counter from '@/app/modules/counter/Counter';
import { RenderTestComponent } from '@/helpers';
import renderWithProviders from '@/utils/renderWithProviders';

describe('Counter.tsx', () => {
  it('Test increment count', () => {
    renderWithProviders(<Counter />);
    const addButton = screen.getByTestId('add-button');
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('0');

    act(() => {
      addButton.click();
    });
    expect(count).toHaveTextContent('1');
  });

  it('Test decrement count', () => {
    renderWithProviders(<Counter />, {
      preloadedState: { counter: { count: 1 } },
    });
    const subButton = screen.getByTestId('subtract-button');
    const count = screen.getByTestId('count');
    act(() => {
      subButton.click();
    });

    expect(count).toHaveTextContent('0');
  });

  it('snapshot testing', () => {
    const { container } = RenderTestComponent(<Counter />);
    expect(container).toMatchSnapshot();
  });
});
