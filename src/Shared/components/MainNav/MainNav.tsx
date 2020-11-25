import React from 'react';
import { Link } from 'react-router-dom';
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
import { List, ListItem, ListItemText } from '@material-ui/core';

export const MainNav: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
        border={'1px solid ' + theme.color.text.main}
        onClickAway={() => setAnchorEl(null)}
      >
        <MainNavStyled>
          <List component={'nav'}>
            <ListItem>
              <UserIcon />
              <ListItemText>Firstname Name</ListItemText>
            </ListItem>

            <ListItem component={Link} to={'/manage'}>
              <FolderOpenIcon />
              <ListItemText>Dossiers à traiter</ListItemText>
            </ListItem>

            <ListItem component={Link} to={'/manage'}>
              <FolderInfoIcon />
              <ListItemText>Dossiers rejetés</ListItemText>
            </ListItem>

            <ListItem component={Link} to={'/manage'}>
              <FolderWaitingIcon />
              <ListItemText>Dossiers en validation</ListItemText>
            </ListItem>

            <ListItem component={Link} to={'/manage'}>
              <FolderIcon />
              <ListItemText>Tous les dossiers</ListItemText>
            </ListItem>

            <ListItem component={Link} to={'/logout'}>
              <PowerIcon />
              <ListItemText>Déconnexion</ListItemText>
            </ListItem>
          </List>
        </MainNavStyled>
      </Popper>
    </>
  );
};
