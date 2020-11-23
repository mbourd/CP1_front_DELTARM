import React from 'react';
import { FilterStyled } from './Filter.style';
import { FilterIcon } from 'Styles';
import { BPIPopper } from 'Shared/components';

export const Filter: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <FilterStyled>
      <FilterIcon onClick={handleClick} />
      <BPIPopper open={open} element={anchorEl} placement={'bottom-end'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci consectetur expedita explicabo magnam
        </p>
      </BPIPopper>
    </FilterStyled>
  );
};
