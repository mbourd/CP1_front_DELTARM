import styled from 'styled-components/macro';

export const FlagsContainerStyled = styled.div`
  bottom: 0;
  height: ${({ theme }) => theme.sizing.xLarge};
  margin: auto;
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxLarge};
  top: 0;

  .flags {
    cursor: pointer;
    display: inline-block;
    line-height: ${({ theme }) => theme.sizing.xLarge};
    margin: 0 ${({ theme }) => theme.spacing.xSmall};
    vertical-align: middle;
  }
`;
