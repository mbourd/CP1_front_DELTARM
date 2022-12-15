import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, List } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { EditHeaderStyled, EditStyled } from './Edit.style';
import {
  isEmpty,
  router,
  SecurityContext,
  SwitchCallState,
  useApi,
  useSecurity,
} from 'Services';
import { BreadCrumb, PreWrapStyled } from 'Shared/components';
import { NavItem } from './NavItem/NavItem';
import { IData } from '../types';
import { EditValidationContext } from '../EditValidationContext';
import { IsLoading } from './IsLoading/IsLoading';
import { ContentBody } from './ContentBody';
import { NotFound } from './NotFound/NotFound';
import { SubHeader } from './SubHeader';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const EditValidation: React.FC<IProps> = ({
  title,
  apiRouteName,
}): React.ReactElement => {
  const { request, callState, send, data } = useApi<IData>();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { user } = useSecurity();
  const { logout } = useContext(SecurityContext);

  // To avoid (bpi specific)
  const { id } = router.getParams();
  const frontRouterQueries = router.getQueries();

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    // To avoid (bpi specific)
    let queries: Record<string, any> = { file_id: id };

    // NEW WAY FOR DYNAMIC PARAMETERS, THE GOAL IS TO HAVE DYNAMIC PARAMETERS FOR ALL CLIENTS
    if (!isEmpty(frontRouterQueries)) {
      queries = frontRouterQueries;
    }

    if (currentSection) {
      queries.section_id = currentSection;
    }

    send(apiRouteName, {}, queries);

    return () => {
      request.abort();
    };
  }, [send, id, currentSection, request, apiRouteName, frontRouterQueries]);

  // useEffect(() => {
  //   console.log(frontRouterQueries);
  // }, [frontRouterQueries]);

  return (
    <SwitchCallState
      callState={callState}
      states={{
        IS_LOADING: <IsLoading title={data?.title} />,
        NOT_FOUND: <NotFound title={data?.title} />,
        BAD_REQUEST: <NotFound title={data?.title} />,
      }}
    >
      {data ? (
        <EditStyled>
          <EditHeaderStyled>
            {data.context === 'edit' && (
              <BreadCrumb values={['Dashboard', 'Edit']} />
            )}
            {data.context === 'validate' && (
              <BreadCrumb values={['Dashboard', 'Validation']} />
            )}
            <SubHeader data={data} />
          </EditHeaderStyled>

          <EditValidationContext.Provider
            value={{ data, fileId: id ? id : frontRouterQueries.file_id }}
          >
            <Grid container wrap={'nowrap'}>
              <Grid item className={'nav'}>
                <List>
                  {data?.sections.map((section, index) => {
                    const current = currentSection || data?.currentSection.id;

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
                <ContentBody />
                {data.sectionFooter && (
                  <Box paddingY={5}>
                    <Alert variant="outlined" severity="info">
                      <PreWrapStyled>
                        {data.sectionFooter.message}
                      </PreWrapStyled>
                    </Alert>
                  </Box>
                )}
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
