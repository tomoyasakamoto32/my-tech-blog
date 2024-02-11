import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToggleColorModeButton } from '../ToggleColorModeButton';

import { Provider } from '@/app/Providers';

describe('ToggleColorModeButtonのテスト', () => {
  test('アイコンボタンが存在すること', () => {
    render(<ToggleColorModeButton />);
    expect(screen.getByLabelText('DarkMode Switch')).toBeInTheDocument();
  });
  test('ボタンをクリックするとアイコンが切り替わること', async () => {
    render(
      <Provider>
        <ToggleColorModeButton />
      </Provider>,
    );
    expect(screen.getByTestId('moon')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('DarkMode Switch'));
    expect(screen.getByTestId('sun')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('DarkMode Switch'));
    expect(screen.getByTestId('moon')).toBeInTheDocument();
  });
});
