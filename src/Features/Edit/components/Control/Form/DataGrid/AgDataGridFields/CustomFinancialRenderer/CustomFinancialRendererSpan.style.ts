import styled from 'styled-components/macro';

const CustomFinancialSpanStyled = styled.span<{
  $font_size: string;
  $margin_right: string;
}>`
  font-size: ${({ $font_size }) => $font_size};
  margin-right: ${({ $margin_right }) => $margin_right};
`;

export { CustomFinancialSpanStyled };
