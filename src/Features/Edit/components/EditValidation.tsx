import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, List } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { EditHeaderStyled, EditStyled } from './Edit.style';
import {
  isEmpty,
  router,
  SecurityContext,
  storage,
  SwitchCallState,
  useApi,
  useSecurity,
} from 'Services';
import { HeadingOne, PreWrapStyled } from 'Shared/components';
import { NavItem } from './NavItem/NavItem';
import { IApiData, IData } from '../types';
import { EditValidationContext } from '../EditValidationContext';
import { IsLoading } from './IsLoading/IsLoading';
import { SwitchContentBody } from './ContentBody/SwitchContentBody';
import { NotFound } from './NotFound/NotFound';
import { SubHeader } from './SubHeader';
import { useRecoilValue } from 'recoil';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { editValidationHandlerCallback } from '../apiRoutes';
import { ModalDynamic } from '../../ModalDynamic/components/ModalDynamic';
import { IDataModal } from '../../ModalDynamic/components/types';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const EditValidation: React.FC<IProps> = ({
  title,
  apiRouteName,
}): React.ReactElement => {
  const { request, callState, send, data: refreshedData } = useApi<IData>();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { logout } = useContext(SecurityContext);
  const { data: recoilData } = useActionButton(jwt);
  const fetchedData: IApiData = useRecoilValue<any>(recoilData);
  const [data, setData] = useState<IData | null>(refreshedData);

  // To avoid (bpi specific)
  const { id } = router.getParams();
  const frontRouterQueries = router.getQueries();

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    if (fetchedData) {
      setData(editValidationHandlerCallback(fetchedData.data));

      return;
    }

    if (refreshedData) {
      setData(refreshedData);

      return;
    }
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
  }, [
    send,
    id,
    currentSection,
    request,
    apiRouteName,
    frontRouterQueries,
    refreshedData,
    fetchedData,
  ]);

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

          <EditValidationContext.Provider
            value={{ data, fileId: id ? id : frontRouterQueries.file_id }}
          >
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
                    <Alert
                      variant="outlined"
                      icon={false}
                      severity={
                        data.sectionHeader.type === 'alert'
                          ? 'error'
                          : 'success'
                      }
                    >
                      <PreWrapStyled>
                        {data.sectionHeader.message}
                      </PreWrapStyled>
                    </Alert>
                  </Box>
                )}
                <SwitchContentBody />
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
