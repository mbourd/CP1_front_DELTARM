import React from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { BPITooltip, FormLabel } from 'Shared/components';
import { HelpIcon } from 'Styles';
import { ControlFontSize, IControl } from 'Features/Edit/types';

interface IProps {
  control: IControl;
}

const useStyles = makeStyles<
  Theme,
  { fontColor?: string; fontSize?: ControlFontSize }
>({
  root: ({ fontColor, fontSize }) => ({
    color: fontColor,
    fontWeight: fontSize === 'bold' ? 'bold' : 'inherit',
  }),
});

export const ControlLabel: React.FC<IProps> = ({
  control,
}): React.ReactElement => {
  const classes = useStyles({
    fontSize: control.fontSize,
    fontColor: control.fontColor,
  });

  return (
    <>
      <FormLabel>
        <Grid
          container
          component={'span'}
          alignItems={'center'}
          wrap={'nowrap'}
        >
          <Grid item component={'span'} xs={12} classes={classes}>
            {control.title}
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
