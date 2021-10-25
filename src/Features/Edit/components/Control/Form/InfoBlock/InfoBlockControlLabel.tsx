import React, { SetStateAction } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { BPITooltip, FormLabel } from 'Shared/components';
import { HelpIcon, theme } from 'Styles';
import { IControl } from 'Features/Edit/types';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

interface IProps {
  control: IControl;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles<Theme>({
  root: () => ({
    border: `1px solid ${theme.color.heading.main}`,
    padding: '.5em',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      border: `1px solid ${theme.color.hover.main}`,
    },
    transition: theme.transition.time,
  }),
});

export const InfoBlockControlLabel: React.FC<IProps> = ({ control, isOpen, setIsOpen }): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      <FormLabel>
        <Grid
          container
          component={'span'}
          alignItems={'center'}
          wrap={'nowrap'}
          onClick={() => setIsOpen(!isOpen)}
          classes={classes}
        >
          <Grid container component={'span'} alignItems={'center'}>
            {control.title}
            {isOpen ? <ArrowUpward /> : <ArrowDownward />}
          </Grid>
          <Grid item component={'span'}>
            {control.desc1 ? (
              <BPITooltip title={control.desc1}>
                <span>
                  <HelpIcon fontSize={'small'} />
                </span>
              </BPITooltip>
            ) : null}
          </Grid>
        </Grid>
      </FormLabel>
    </>
  );
};
