import React from 'react';
import { FilterStyled } from './Filter.style';
import { FilterIcon, useTheme } from 'Styles';
import { Popper } from 'Shared/components';

export const Filter: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <FilterStyled>
      <FilterIcon onClick={handleClick} className={'filter-icon'} fontSize={'small'} />
      <Popper open={open} element={anchorEl} placement={'bottom-end'} border={'1px solid ' + theme.color.primary.main}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci consectetur expedita explicabo magnam
        </p>
      </Popper>
    </FilterStyled>
  );
};
