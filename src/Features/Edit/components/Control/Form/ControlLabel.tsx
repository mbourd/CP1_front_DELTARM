import React from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { BPITooltip, FormLabel } from 'Shared/components';
import { HelpIcon } from 'Styles';
import { ControlFontSize, IApiControl } from 'Features/Edit/types';

interface IProps {
  control: IApiControl;
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

export const ControlLabel: React.FC<React.PropsWithChildren<IProps>> = ({
  control,
}): React.ReactElement => {
  const classes = useStyles({
    fontSize: control.control_font_size,
    fontColor: control.control_font_color,
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
            {control.control_title}
          </Grid>
          <Grid item component={'span'}>
            {control.control_desc_1 ? (
              <BPITooltip title={control.control_desc_1}>
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
