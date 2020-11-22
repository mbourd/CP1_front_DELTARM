import { makeStyles, Theme } from '@material-ui/core';
import { IBadge } from './types';

export const useStyles = makeStyles<Theme, Pick<IBadge, 'bgc' | 'color' | 'fontFamily'>>({
  badge: {
    backgroundColor: ({ bgc }) => bgc || '#000000',
    color: ({ color }) => color || '#FFFFFF',
    fontFamily: ({ fontFamily }) => fontFamily || 'inherit',
  },
});
