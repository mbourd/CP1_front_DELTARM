import styled from 'styled-components';

const CustomFinancialSpanStyled = styled.span<{
  $font_size: string;
  $margin_right: string;
}>`
  margin-right: ${({ $margin_right }) => $margin_right};
  font-size: ${({ $font_size }) => $font_size};
`;

export { CustomFinancialSpanStyled };
