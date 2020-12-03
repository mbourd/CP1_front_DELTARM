import React, { useEffect, useState } from 'react';
import { Grid, List } from '@material-ui/core';
import { EditStyled, EditTitleFileStyled } from './Edit.style';
import { router, storage, useApi, useTrans } from 'Services';
import { HeadingOne, ServerError } from 'Shared/components';
import { FolderOpenIcon } from 'Styles';
import { NavItem } from './NavItem/NavItem';
import { IData } from '../types';
import { EditContext } from '../EditContext';
import { NoData } from './NoData/NoData';
import { IsLoading } from './IsLoading/IsLoading';
import { SwitchContentBody } from './ContentBody/SwitchContentBody';

export const Edit: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const { error, isLoading, send, data } = useApi<IData>();
  const [currentSection, setCurrentSection] = useState('1');
  const { id } = router.getParams();

  useEffect(() => {
    send('edit', {}, { file_id: id, section_id: currentSection });
  }, [send, id, currentSection]);

  if (error) {
    return <ServerError />;
  }

  if (isLoading) {
    return <IsLoading id={id} />;
  }

  if (!data) {
    return <NoData id={id} />;
  }

  return (
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
              {data.sections.map((section) => {
                if (section.id === currentSection) {
                  storage.setData('edit.section.active', section.code);
                }

                return (
                  <NavItem
                    key={section.id}
                    item={section}
                    active={section.id === currentSection}
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
  );
};
