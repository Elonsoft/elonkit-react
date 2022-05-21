import { render, screen } from '../../testing';

import { InlineTextField } from '.';

describe('InlineTextField', () => {
  it('Should pass', async () => {
    render(<InlineTextField text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
