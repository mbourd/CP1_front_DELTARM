import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import version from '../../../build-version.json';
import { List, ListItem, ListItemText } from '@material-ui/core';
import {
  FolderIcon,
  FolderInfoIcon,
  FolderOpenIcon,
  FolderWaitingIcon,
  MenuIcon,
  PowerIcon,
  UserIcon,
  useTheme,
} from 'Styles';
import { MainNavStyled } from './MainNav.style';
import { Popper } from 'Shared/components';
import {
  router,
  SecurityContext,
  useApi,
  useSecurity,
  useTrans,
} from 'Services';
import { useDashboardDynamicReducer } from 'Features/DashboardDynamic/dashboardDynamic.reducer';
import { RoundFilledIcon } from 'Packages/Design/icons/RoundFilledIcon';
import { ModalDynamic } from 'Features/ModalDynamic/components/ModalDynamic';
import { useActionButton } from 'Packages/Helpers/src/useActionButton';
import { IDataModal } from 'Features/ModalDynamic/components/types';
import { useRecoilValue } from 'recoil';
import { DashboardContrPermMenuType } from 'Features/DashboardDynamic/components/types';

export const MainNav: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const { stateDashboardDynamic } = useDashboardDynamicReducer();
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const theme = useTheme();
  const [trans] = useTrans('Default');
  const { data: dataSecurity, logout } = useContext(SecurityContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { modalData: recoilData, actionButton } = useActionButton({
    jwt,
    setIsModalOpen,
  });
  const modalData: IDataModal = useRecoilValue<any>(recoilData);

  const handleClick = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const hideNav = () => {
    setAnchorEl(null);
  };

  const { send, data: userInfos } = useApi<any>({ waitForAuthenticated: true });

  useEffect(() => {
    send('userInfo');
  }, [send]);

  return (
    <>
      <MenuIcon
        fontSize={'medium'}
        onClick={handleClick}
        className={'menu-icon' + (anchorEl ? ' active' : '')}
      />
      <Popper
        element={anchorEl}
        placement={'bottom-end'}
        bdr={'0'}
        border={'1px solid ' + theme.color.secondary.main}
        onClickAway={() => setAnchorEl(null)}
      >
        <MainNavStyled>
          <List component={'nav'}>
            <ListItem>
              <UserIcon />
              {userInfos && (
                <ListItemText>
                  {userInfos.data.user_first_name}{' '}
                  {userInfos.data.user_last_name}
                </ListItemText>
              )}
            </ListItem>

            {dataSecurity.context !== 'contr_perm' && (
              <>
                <ListItem
                  component={Link}
                  to={
                    router.generatePath('manage', {}, { state_id: 1 }) ||
                    '/manage'
                  }
                  onClick={hideNav}
                >
                  <FolderOpenIcon />
                  <ListItemText>{trans('filesToBeProcessed')}</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to={
                    router.generatePath('manage', {}, { state_id: 2 }) ||
                    '/manage'
                  }
                  onClick={hideNav}
                >
                  <FolderWaitingIcon />
                  <ListItemText>{trans('filesInValidation')}</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to={
                    router.generatePath('manage', {}, { state_id: 3 }) ||
                    '/manage'
                  }
                  onClick={hideNav}
                >
                  <FolderInfoIcon />
                  <ListItemText>{trans('rejectedFiles')}</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to={router.generatePath('manage') || '/manage'}
                  onClick={hideNav}
                >
                  <FolderIcon />
                  <ListItemText>{trans('allFiles')}</ListItemText>
                </ListItem>
              </>
            )}
            {dataSecurity.context === 'contr_perm'
              ? (() => {
                  let storedLocalMenus = [];

                  if (localStorage.getItem('additional_menu_data'))
                    storedLocalMenus = JSON.parse(
                      localStorage.getItem('additional_menu_data') + '' ?? '[]',
                    );

                  const reorderedMenus: DashboardContrPermMenuType[] = [
                    // ...(stateDashboardDynamic?.dataApi_dashboardControlPermanent
                    // ?.data.menus ?? []),
                    ...storedLocalMenus,
                  ];

                  reorderedMenus.sort((m1, m2) => {
                    if (m1.menu_order < m2.menu_order) return -1;
                    if (m1.menu_order > m2.menu_order) return 1;

                    return 0;
                  });

                  return reorderedMenus.map((m, i) => {
                    return (
                      <ListItem
                        key={'menu-contr_perm' + i}
                        component={Link}
                        to={
                          m?.action?.endpoint.includes('modal')
                            ? '#'
                            : m.action.endpoint
                        }
                        onClick={async (e) => {
                          hideNav();

                          if (m?.action?.endpoint.includes('modal')) {
                            e.preventDefault();
                            actionButton(m.action);
                          }
                        }}
                        className={'contr_perm_menus'}
                      >
                        <RoundFilledIcon />
                        <ListItemText>{m.menu_lib}</ListItemText>
                      </ListItem>
                    );
                  });
                })()
              : null}
            <ListItem
              component={Link}
              to={router.generatePath('logout') || '/logout'}
              onClick={() => {
                logout();
              }}
            >
              <PowerIcon />
              <ListItemText>{trans('logout')}</ListItemText>
            </ListItem>
          </List>
        </MainNavStyled>
        <ListItem>
          <ListItemText style={{ textAlign: 'right' }}>
            {`Version ${version.buildMajor}.${version.buildMinor}.${version.buildRevision}`}
          </ListItemText>
        </ListItem>
      </Popper>
      {isModalOpen && modalData ? (
        <ModalDynamic
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={modalData}
        />
      ) : null}
    </>
  );
};
