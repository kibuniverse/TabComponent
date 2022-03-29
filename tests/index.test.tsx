import { render, screen } from '@modern-js/runtime/testing';

import Component from '@/index';

describe('默认值 cases', () => {
  test('Rendered', () => {
    render(<Component />);
    expect(screen.getByText('this is a ui component')).toBeInTheDocument();
  });
});
