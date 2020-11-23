import { makeStyles, Theme } from '@material-ui/core';
import { IBadge } from './types';

export const useStyles = makeStyles<Theme, Pick<IBadge, 'bgc' | 'color' | 'fontFamily'>>({
  badge: {
    backgroundColor: ({ bgc }) => bgc,
    color: ({ color }) => color,
    fontFamily: ({ fontFamily }) => fontFamily,
  },
});
