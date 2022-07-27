import React from 'react';
import * as stories from './SelectListControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from 'setupTests';
import { getByText } from '@testing-library/react';
const { Select, SelectRejectable } = composeStories(stories);

describe('Suite test select list control', () => {

  it('should render the select list with list of choices', () => {
    const { getByRole, getByText } = render(<Select />);
    expect(getByRole('button', { name: /conforme/i })).toBeInTheDocument();
    fireEvent.click(getByRole('button', { name: /conforme/i }));
    expect(getByRole('list')).toBeInTheDocument();
    expect(getByText('NON CONFORME')).toBeInTheDocument();
  });
  it('should render the select list with rejection', () => {
    const { getByText } = render(<SelectRejectable />);
    expect(getByText('Refusé')).toBeInTheDocument();
  });
  it('should open the comment section while clicking on the comment icon', () => {
    const result = render(<SelectRejectable />);
    const commentsIcon = result.container.querySelector(
      '#rejected-comments1928 > svg',
    );
    if (commentsIcon) {
      fireEvent.click(commentsIcon);
    }
    expect(result.getByRole('tooltip')).toBeVisible();
    expect(result.getByText('Commentaires liés au rejet')).toBeInTheDocument();
  });
});
