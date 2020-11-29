import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
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
import { router, useTrans } from 'Services';

export const MainNav: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const theme = useTheme();
  const [trans] = useTrans('Default');

  const handleClick = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const hideNav = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <MenuIcon fontSize={'default'} onClick={handleClick} className={'menu-icon' + (open ? ' active' : '')} />
      <Popper
        open={open}
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
              <ListItemText>Firstname Name</ListItemText>
            </ListItem>

            <ListItem
              component={Link}
              to={router.generatePath('manage', {}, { state_id: 1 }) || '/manage'}
              onClick={hideNav}
            >
              <FolderOpenIcon />
              <ListItemText>{trans('filesToBeProcessed')}</ListItemText>
            </ListItem>

            <ListItem
              component={Link}
              to={router.generatePath('manage', {}, { state_id: 2 }) || '/manage'}
              onClick={hideNav}
            >
              <FolderWaitingIcon />
              <ListItemText>{trans('filesInValidation')}</ListItemText>
            </ListItem>

            <ListItem
              component={Link}
              to={router.generatePath('manage', {}, { state_id: 3 }) || '/manage'}
              onClick={hideNav}
            >
              <FolderInfoIcon />
              <ListItemText>{trans('rejectedFiles')}</ListItemText>
            </ListItem>

            <ListItem component={Link} to={router.generatePath('manage') || '/manage'} onClick={hideNav}>
              <FolderIcon />
              <ListItemText>{trans('allFiles')}</ListItemText>
            </ListItem>

            <ListItem component={Link} to={'/logout'} onClick={hideNav}>
              <PowerIcon />
              <ListItemText>{trans('logout')}</ListItemText>
            </ListItem>
          </List>
        </MainNavStyled>
      </Popper>
    </>
  );
};
