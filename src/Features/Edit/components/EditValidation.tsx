import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, List } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { EditHeaderStyled, EditStyled } from './Edit.style';
import { router, SecurityContext, storage, SwitchCallState, useApi, useSecurity } from 'Services';
import { HeadingOne } from 'Shared/components';
import { NavItem } from './NavItem/NavItem';
import { IData } from '../types';
import { EditValidationContext } from '../EditValidationContext';
import { IsLoading } from './IsLoading/IsLoading';
import { SwitchContentBody } from './ContentBody/SwitchContentBody';
import { NotFound } from './NotFound/NotFound';
import { SubHeader } from './SubHeader';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const EditValidation: React.FC<IProps> = ({ title, apiRouteName }): React.ReactElement => {
  const { request, callState, send, data } = useApi<IData>();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { user } = useSecurity();
  const { logout } = useContext(SecurityContext);
  const { id } = router.getParams();

  if (!user.isLogged()) {
    logout();
  }

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
      states={{
        IS_LOADING: <IsLoading title={title} />,
        NOT_FOUND: <NotFound title={title} />,
        BAD_REQUEST: <NotFound title={title} />,
      }}
    >
      {data ? (
        <EditStyled>
          <EditHeaderStyled>
            <HeadingOne>
              <SubHeader title={title} data={data} />
            </HeadingOne>
          </EditHeaderStyled>

          <EditValidationContext.Provider value={{ data, fileId: id }}>
            <Grid container wrap={'nowrap'}>
              <Grid item className={'nav'}>
                <List>
                  {data?.sections.map((section, index) => {
                    const current = currentSection || data?.currentSection.id;

                    if (section.id === current) {
                      storage.setData('edit.section.active', section.code);
                    }

                    return (
                      <NavItem
                        key={index}
                        item={section}
                        active={section.id === current}
                        onClick={(id: string) => setCurrentSection(id)}
                      />
                    );
                  })}
                </List>
              </Grid>
              <Grid item className={'content'}>
                {data.sectionHeader && (
                  <Box paddingBottom={5}>
                    <Alert variant="outlined" severity={data.sectionHeader.type === 'alert' ? 'error' : 'success'}>
                      {data.sectionHeader.message}
                    </Alert>
                  </Box>
                )}
                <SwitchContentBody />
              </Grid>
            </Grid>
          </EditValidationContext.Provider>
        </EditStyled>
      ) : (
        <NotFound title={title} />
      )}
    </SwitchCallState>
  );
};
