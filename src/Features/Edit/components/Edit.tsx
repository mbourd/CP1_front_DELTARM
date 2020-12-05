import React, { useEffect, useState } from 'react';
import { Grid, List } from '@material-ui/core';
import { EditStyled, EditTitleFileStyled } from './Edit.style';
import { router, storage, SwitchCallState, useApi, useTrans } from 'Services';
import { HeadingOne } from 'Shared/components';
import { FolderOpenIcon } from 'Styles';
import { NavItem } from './NavItem/NavItem';
import { IData } from '../types';
import { EditContext } from '../EditContext';
import { IsLoading } from './IsLoading/IsLoading';
import { SwitchContentBody } from './ContentBody/SwitchContentBody';
import { NotFound } from './NotFound/NotFound';

export const Edit: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const { request, callState, send, data } = useApi<IData>();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { id } = router.getParams();

  useEffect(() => {
    const queries: Record<string, any> = { file_id: id };
    if (currentSection) {
      queries.section_id = currentSection;
    }

    send('edit', {}, queries);

    return () => {
      request.abort();
    };
  }, [send, id, currentSection, request]);

  return (
    <SwitchCallState
      callState={callState}
      states={{ IS_LOADING: <IsLoading id={id} />, NOT_FOUND: <NotFound id={id} /> }}
    >
      <EditStyled>
        <HeadingOne>
          <p>{trans('pageTitle')}</p>
          <EditTitleFileStyled>
            <FolderOpenIcon />
            <span>{id}</span>
          </EditTitleFileStyled>
        </HeadingOne>
        <EditContext.Provider value={{ data, fileId: id }}>
          <Grid container wrap={'nowrap'}>
            <Grid item className={'nav'}>
              <List>
                {data?.sections.map((section) => {
                  const current = currentSection || data?.currentSection.id;

                  if (section.id === current) {
                    storage.setData('edit.section.active', section.code);
                  }

                  return (
                    <NavItem
                      key={section.id}
                      item={section}
                      active={section.id === current}
                      onClick={section.locked ? undefined : (id: string) => setCurrentSection(id)}
                    />
                  );
                })}
              </List>
            </Grid>
            <Grid item className={'content'}>
              <SwitchContentBody />
            </Grid>
          </Grid>
        </EditContext.Provider>
      </EditStyled>
    </SwitchCallState>
  );
};
