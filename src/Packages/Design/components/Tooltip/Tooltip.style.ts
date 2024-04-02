import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ITooltip } from './types';

export const useStyles = makeStyles<
  Theme,
  Omit<ITooltip, 'children' | 'placement' | 'title'>
>({
  arrow: {
    color: ({ color }) => color,
    fontSize: ({ fontSize }) => fontSize,
  },
  tooltip: {
    backgroundColor: ({ bgc }) => bgc,
    color: ({ color }) => color,
    border: ({ color }) => '1px solid ' + color,
    fontSize: ({ fontSize }) => fontSize,
    fontFamily: ({ fontFamily }) => fontFamily,
    whiteSpace: 'pre-wrap',
  },
});
