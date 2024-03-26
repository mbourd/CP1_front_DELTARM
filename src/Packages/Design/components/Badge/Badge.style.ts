import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { IBadge } from './types';

export const useStyles = makeStyles<
  Theme,
  Pick<IBadge, 'bgc' | 'color' | 'fontFamily'>
>({
  badge: {
    backgroundColor: ({ bgc }) => bgc,
    color: ({ color }) => color,
    fontFamily: ({ fontFamily }) => fontFamily,
  },
});
