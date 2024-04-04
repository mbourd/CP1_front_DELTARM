import styled from 'styled-components';

export const FlagsContainerStyled = styled.div`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacing.xxLarge};
  bottom: 0;
  height: ${({ theme }) => theme.sizing.xLarge};
  margin: auto;

  .flags {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.spacing.xSmall};
    cursor: pointer;
    line-height: ${({ theme }) => theme.sizing.xLarge};
    vertical-align: middle;
  }
`;
