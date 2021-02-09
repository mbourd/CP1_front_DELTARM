import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import { FilterStyled, BadgeStyled } from './Filter.style';
import { FilterIcon, useTheme } from 'Styles';
import { BPIBadge, Checkbox, Popper } from 'Shared/components';
import { storage, useApi } from 'Services';
import { IApiStage, IApiState } from '../../apiRoutes';

interface IProps {
  initStages?: Record<number, true>;
  initStates?: Record<number, true>;
  initRoles?: Record<number, true>;
}

export const Filter: React.FC<IProps> = ({
  initStages = {},
  initStates = {},
  initRoles = {},
  children,
}): React.ReactElement => {
  const { error, isLoading, send, data } = useApi<{ stages: IApiStage[]; states: IApiState[] }>();
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const [stages, setStages] = useState<Record<number, true>>(initStages);
  const initStatesRef = useRef(initStates);
  const initRolesRef = useRef(initRoles);

  const [stateFilters, setStateFilters] = useState<{ state_id: number; state_role: number }[]>([]);

  const states = useMemo<Record<number, true>>(
    () => Object.fromEntries(stateFilters.map(({ state_id }) => [state_id, true])),
    [stateFilters],
  );
  const roles = useMemo<Record<number, true>>(
    () => Object.fromEntries(stateFilters.map(({ state_role }) => [state_role, true])),
    [stateFilters],
  );

  const theme = useTheme();

  const countStages = Object.keys(stages).length;
  const countStates = Object.keys(stateFilters).length;

  const handleClick = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const onChangeStage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const input = e.currentTarget;

      input.checked ? (stages[id] = true) : delete stages[id];

      setStages(stages);
    },
    [stages],
  );

  const onChangeState = useCallback((e: React.ChangeEvent<HTMLInputElement>, state_id: number, state_role: number) => {
    const input = e.currentTarget;

    if (input.checked) {
      setStateFilters((current) => [...current, { state_id, state_role }]);
    } else {
      setStateFilters((current) =>
        current.filter((state) => state.state_id !== state_id || state.state_role !== state_role),
      );
    }
  }, []);

  useEffect(() => {
    send('manageFilters');
  }, [send]);

  useEffect(() => {
    if (data?.states) {
      setStateFilters(
        data.states
          .map(({ state_id, state_role }) => ({ state_id, state_role }))
          .filter(({ state_id, state_role }) => initStatesRef.current[state_id] && initRolesRef.current[state_role]),
      );
    }
  }, [data]);

  useEffect(() => {
    storage.setData('manage', { filter: { stages, states, roles } });
  }, [stages, states, roles]);

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
            <FilterIcon
              onClick={handleClick}
              className={'filter-icon' + (anchorEl ? ' active' : '')}
              fontSize={'small'}
            />
          </BPIBadge>
        ) : (
          <FilterIcon
            onClick={handleClick}
            className={'filter-icon' + (anchorEl ? ' active' : '')}
            fontSize={'small'}
          />
        )}
      </BadgeStyled>
      <Popper
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
                  {data.stages.map((stage, index) => {
                    return (
                      <div key={index}>
                        <Checkbox
                          checked={stages[stage.stage_id]}
                          label={stage.stage_name.toLowerCase()}
                          onChange={(e) => onChangeStage(e, stage.stage_id)}
                        />
                      </div>
                    );
                  })}
                </Grid>
                <Grid item className={'states'} xs={6}>
                  {data.states.map((state, index) => {
                    return (
                      <div key={index}>
                        <Checkbox
                          checked={stateFilters.some(
                            ({ state_id, state_role }) =>
                              state.state_id === state_id && state.state_role === state_role,
                          )}
                          label={state.state_name.toLowerCase()}
                          onChange={(e) => onChangeState(e, state.state_id, state.state_role)}
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
          <footer>{children}</footer>
        </FilterStyled>
      </Popper>
    </>
  );
};
