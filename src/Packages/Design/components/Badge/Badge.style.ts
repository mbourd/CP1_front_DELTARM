import { makeStyles, Theme } from '@material-ui/core';
import { IBadge } from './types';

export const useStyles = makeStyles<Theme, IBadge>({
  badge: {
    backgroundColor: ({ backgroundColor }) => backgroundColor || '#000000',
    color: ({ color }) => color || '#FFFFFF',
    fontFamily: ({ fontFamily }) => fontFamily || 'inherit',
  },
});
