import styled from 'styled-components';

interface IProps {
  $locked: boolean;
  $active: boolean;
}

export const NavItemStyled = styled.span<IProps>`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  border-style: dotted;
  border-color: ${({ theme }) => theme.color.primary.main};
  border-bottom-width: 1px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.white.main : 'transparent'};
  cursor: ${({ $active }) => {
    if ($active) {
      return 'default';
    }

    return 'pointer';
  }};

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.disabled.main};
    cursor: default;

    &:hover {
      color: ${({ theme }) => theme.color.disabled.main};
    }
  }
`;

export const NavItemTextStyled = styled.span`
  display: inline-block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium + ' ' + theme.spacing.small};
  color: ${({ theme }) => theme.color.text.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  font-size: ${({ theme }) => theme.sizing.normal};
  text-align: right;
  text-transform: uppercase;
`;
