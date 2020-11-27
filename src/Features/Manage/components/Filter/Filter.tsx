import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { FilterStyled, BadgeStyled } from './Filter.style';
import { FilterIcon, useTheme } from 'Styles';
import { BPIBadge, Checkbox, Popper } from 'Shared/components';
import { storage, useApi } from 'Services';
import { IApiStage, IApiState } from '../../apiRoutes';

interface IProps {
  initStages?: Record<number, true>;
  initStates?: Record<number, true>;
}

export const Filter: React.FC<IProps> = ({ initStages = {}, initStates = {} }): React.ReactElement => {
  const { error, isLoading, send, data } = useApi<{ stages: IApiStage[]; states: IApiState[] }>();
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const [stages, setStages] = useState<Record<number, true>>(initStages);
  const [states, setStates] = useState<Record<number, true>>(initStates);
  const theme = useTheme();

  const countStages = Object.keys(stages).length;
  const countStates = Object.keys(states).length;

  const handleClick = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, type: 'stages' | 'states', id: number) => {
      const input = e.currentTarget;

      if (type === 'stages') {
        input.checked ? (stages[id] = true) : delete stages[id];

        storage.setRuntimeData('manage', { filter: { stages, states } });

        setStages(stages);
      }

      if (type === 'states') {
        input.checked ? (states[id] = true) : delete states[id];

        storage.setRuntimeData('manage', { filter: { stages, states } });

        setStates(states);
      }
    },
    [stages, states],
  );

  const open = Boolean(anchorEl);

  useEffect(() => {
    send('manageFilters');
    storage.setRuntimeData('manage', { filter: { stages, states } });
  }, [send, stages, states]);

  let altContent: null | React.ReactNode = null;

  if (isLoading || !data) {
    altContent = 'Loading...';
  }

  if (error) {
    altContent = 'Error';
  }

  return (
    <>
      <BadgeStyled>
        {countStages + countStates > 0 ? (
          <BPIBadge content={countStages + countStates}>
            <FilterIcon onClick={handleClick} className={'filter-icon' + (open ? ' active' : '')} fontSize={'small'} />
          </BPIBadge>
        ) : (
          <FilterIcon onClick={handleClick} className={'filter-icon' + (open ? ' active' : '')} fontSize={'small'} />
        )}
      </BadgeStyled>
      <Popper
        open={open}
        element={anchorEl}
        placement={'bottom-end'}
        border={'1px solid ' + theme.color.primary.main}
        onClickAway={() => setAnchorEl(null)}
        zIndex={10}
      >
        <FilterStyled>
          <header className={'title'}>Filtrer les dossiers</header>
          <Grid container wrap={'nowrap'} alignItems={'center'}>
            {data ? (
              <>
                <Grid item className={'stages'} xs={6}>
                  {data.stages.map((stage) => {
                    return (
                      <div key={stage.stage_id}>
                        <Checkbox
                          checked={stages[stage.stage_id]}
                          label={stage.stage_name.toLowerCase()}
                          onChange={(e) => onChange(e, 'stages', stage.stage_id)}
                        />
                      </div>
                    );
                  })}
                </Grid>
                <Grid item className={'states'} xs={6}>
                  {data.states.map((state) => {
                    return (
                      <div key={state.state_id}>
                        <Checkbox
                          checked={states[state.state_id]}
                          label={state.state_name.toLowerCase()}
                          onChange={(e) => onChange(e, 'states', state.state_id)}
                        />
                      </div>
                    );
                  })}
                </Grid>
              </>
            ) : (
              altContent
            )}
          </Grid>
        </FilterStyled>
      </Popper>
    </>
  );
};
