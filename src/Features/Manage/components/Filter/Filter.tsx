import React from 'react';
import { Grid } from '@material-ui/core';
import { FilterStyled } from './Filter.style';
import { FilterIcon, useTheme } from 'Styles';
import { Checkbox, Popper } from 'Shared/components';

export const Filter: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FilterIcon onClick={handleClick} className={'filter-icon' + (open ? ' active' : '')} fontSize={'small'} />
      <Popper
        open={open}
        element={anchorEl}
        placement={'bottom-end'}
        border={'1px solid ' + theme.color.primary.main}
        onClickAway={() => setAnchorEl(null)}
      >
        <FilterStyled>
          <header className={'title'}>Filtrer les dossiers</header>
          <Grid container wrap={'nowrap'} alignItems={'center'}>
            <Grid item className={'stages'} xs={6}>
              <div>
                <Checkbox label={'My stage'} />
              </div>
              <div>
                <Checkbox label={'My stage'} />
              </div>
              <div>
                <Checkbox label={'My stage'} />
              </div>
            </Grid>
            <Grid item className={'states'} xs={6}>
              <div>
                <Checkbox label={'My state'} />
              </div>
              <div>
                <Checkbox label={'My state'} />
              </div>
              <div>
                <Checkbox label={'My state'} />
              </div>
            </Grid>
          </Grid>
        </FilterStyled>
      </Popper>
    </>
  );
};
