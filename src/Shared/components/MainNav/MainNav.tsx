import React from 'react';
import { Link } from 'react-router-dom';
import version from '../../../build-version.json';
import { List, ListItem, ListItemText } from '@mui/material';
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
import { router, SecurityContext, useSecurity, useTrans } from 'Services';
import { useDashboardDynamicReducer } from 'Features/DashboardDynamic/dashboardDynamic.reducer';
import { RoundFilledIcon } from 'Packages/Design/icons/RoundFilledIcon';
import { ModalDynamic } from 'Features/ModalDynamic/components/ModalDynamic';
import { useActionButton } from 'Packages/Helpers/src/useActionButton';
import { IDataModal } from 'Features/ModalDynamic/components/types';
import { useRecoilValue } from 'recoil';
import { DashboardContrPermMenuType } from 'Features/DashboardDynamic/components/types';
import { useAuth } from 'hooks';

export const MainNav: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);

  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const theme = useTheme();
  const { user } = useSecurity();
  const [trans] = useTrans('Default');
  const { data: dataSecurity, logout } = React.useContext(SecurityContext);
  const { onGetCurrentUser, currentUser } = useAuth();
  const { stateDashboardDynamic } = useDashboardDynamicReducer();
  const { modalData: recoilData, actionButton } = useActionButton({
    jwt: user.getJwt(),
    setIsModalOpen,
  });

  const modalData: IDataModal = useRecoilValue<any>(recoilData);

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const handleClick = React.useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const hideNav = () => setAnchorEl(null);

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <>
      <MenuIcon
        fontSize={'medium'}
        onClick={handleClick}
        className={'menu-icon' + (anchorEl ? ' active' : '')}
      />
      <Popper
        bdr={'0'}
        element={anchorEl}
        placement={'bottom-end'}
        onClickAway={() => setAnchorEl(null)}
        border={'1px solid ' + theme.color.secondary.main}
      >
        <MainNavStyled>
          <List component={'nav'}>
            <ListItem>
              <UserIcon />
              {currentUser && (
                <ListItemText>
                  {currentUser.user_first_name} {currentUser.user_last_name}
                </ListItemText>
              )}
            </ListItem>

            {dataSecurity.context !== 'contr_perm' && (
              <>
                <ListItem
                  component={Link}
                  onClick={hideNav}
                  to={
                    router.generatePath('manage', {}, { state_id: 1 }) ||
                    '/manage'
                  }
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
                  const reorderedMenus: DashboardContrPermMenuType[] = [
                    ...(stateDashboardDynamic?.dataApi_dashboardControlPermanent
                      ?.data.menus ?? []),
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
          data={modalData}
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};
