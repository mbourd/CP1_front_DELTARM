import styled from 'styled-components/macro';

const CustomFinancialSpanStyled = styled.span.attrs(
  (props: { font_size: string; margin_right: string }) => props,
)`
  font-size: ${({ font_size }) => font_size};
  margin-right: ${({ margin_right }) => margin_right};
`;

export { CustomFinancialSpanStyled };
