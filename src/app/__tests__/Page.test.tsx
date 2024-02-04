import { screen, render } from '@testing-library/react';

import Home from '../page';

describe('', () => {
  test('rendering Page', () => {
    render(<Home />);
    expect(screen.getByText('ブログです')).toBeInTheDocument();
  });
});
