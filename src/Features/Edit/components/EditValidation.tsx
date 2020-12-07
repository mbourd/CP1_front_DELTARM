import React, { useEffect, useState } from 'react';
import { Grid, List } from '@material-ui/core';
import { EditStyled } from './Edit.style';
import { router, storage, SwitchCallState, useApi } from 'Services';
import { HeadingOne } from 'Shared/components';
import { NavItem } from './NavItem/NavItem';
import { IData } from '../types';
import { EditValidationContext } from '../EditValidationContext';
import { IsLoading } from './IsLoading/IsLoading';
import { SwitchContentBody } from './ContentBody/SwitchContentBody';
import { NotFound } from './NotFound/NotFound';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const EditValidation: React.FC<IProps> = ({ title, apiRouteName }): React.ReactElement => {
  const { request, callState, send, data } = useApi<IData>();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { id } = router.getParams();

  useEffect(() => {
    const queries: Record<string, any> = { file_id: id };
    if (currentSection) {
      queries.section_id = currentSection;
    }

    send(apiRouteName, {}, queries);

    return () => {
      request.abort();
    };
  }, [send, id, currentSection, request, apiRouteName]);

  return (
    <SwitchCallState
      callState={callState}
      states={{ IS_LOADING: <IsLoading title={title} />, NOT_FOUND: <NotFound title={title} /> }}
    >
      <EditStyled>
        <HeadingOne>{title}</HeadingOne>
        <EditValidationContext.Provider value={{ data, fileId: id }}>
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
                      onClick={(id: string) => setCurrentSection(id)}
                    />
                  );
                })}
              </List>
            </Grid>
            <Grid item className={'content'}>
              <SwitchContentBody />
            </Grid>
          </Grid>
        </EditValidationContext.Provider>
      </EditStyled>
    </SwitchCallState>
  );
};
