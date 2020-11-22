import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchStyled } from './Search.style';
import { BPITooltip, InputSearch, Popper } from 'Shared/components';
import { FilterIcon, SortIcon, useTheme } from 'Styles';
import { useTrans } from 'Services';

export const Search: React.FC = (): React.ReactElement => {
  const theme = useTheme();
  const [trans] = useTrans('Manage');

  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <SearchStyled>
      <Grid container wrap={'nowrap'} alignItems={'center'}>
        <Grid item sm={2} />
        <Grid item sm={7} className={'search'}>
          <InputSearch radius border={0} background={theme.color.white.main} placeholder={trans('searchPlaceholder')} />
        </Grid>
        <Grid item sm={2} className={'filter'}>
          <BPITooltip title={trans('filter')}>
            <span>
              <FilterIcon onClick={handleClick} />
            </span>
          </BPITooltip>
          <Popper open={open} element={anchorEl} />
          <BPITooltip title={trans('sort')}>
            <span>
              <SortIcon />
            </span>
          </BPITooltip>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </SearchStyled>
  );
};
