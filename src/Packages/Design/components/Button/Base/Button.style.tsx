import { makeStyles, Theme } from '@material-ui/core';
import { IColorVariant } from '../../../types';

interface IProps {
  color: IColorVariant;
  font: string;
  transition: string;
  type?: 'default' | 'alt';
  disabled?: boolean;
}

export const useStyles = makeStyles<Theme, IProps>({
  root: {
    padding: '6px 15px',
    backgroundColor: ({ type, color, disabled }) => {
      if (disabled) {
        return type === 'default' ? '#cdcdcd' : 'transparent';
      }

      return type === 'default' ? color.main : 'transparent';
    },
    fontFamily: ({ font }) => font,
    textTransform: 'none',
    color: ({ type, color }) => (type === 'default' ? '#FFF' : color.main),
    border: ({ type, color, disabled }) => {
      if (disabled) {
        return type === 'default' ? 'none' : `1px solid #cdcdcd`;
      }

      return type === 'default' ? 'none' : `1px solid ${color.main}`;
    },
    transition: ({ transition }) => 'all ' + transition,
    '&:hover': {
      color: ({ type, color }) => (type === 'default' ? '#FFF' : color.light),
      border: ({ type, color }) => (type === 'default' ? 'none' : `1px solid ${color.light}`),
      backgroundColor: ({ type, color }) => (type === 'default' ? color.dark : 'transparent'),
    },
  },
});
