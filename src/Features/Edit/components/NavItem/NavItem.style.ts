import styled from 'styled-components/macro';

interface IProps {
  $locked: boolean;
  $active: boolean;
}

export const NavItemStyled = styled.span<IProps>`
  align-items: center;
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.white.main : 'transparent'};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.primary.main};
  border-style: dotted;
  cursor: ${({ $active }) => {
    if ($active) {
      return 'default';
    }

    return 'pointer';
  }};
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.disabled.main};
    cursor: default;

    &:hover {
      color: ${({ theme }) => theme.color.disabled.main};
    }
  }
`;

export const NavItemTextStyled = styled.span`
  color: ${({ theme }) => theme.color.text.main};
  display: inline-block;
  font-family: ${({ theme }) => theme.font.medium.main};
  font-size: ${({ theme }) => theme.sizing.normal};
  padding: ${({ theme }) => theme.spacing.medium + ' ' + theme.spacing.small};
  text-align: right;
  text-transform: uppercase;
  width: 100%;
`;
