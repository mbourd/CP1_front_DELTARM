import React from 'react';
import { ITooltip, Tooltip } from 'Shared/components';
import { useTheme } from 'Styles';

export const BPITooltip: React.FC<Pick<ITooltip, 'title' | 'placement' | 'children'>> = ({
  title,
  placement,
  children,
}): React.ReactElement => {
  const theme = useTheme();

  return (
    <Tooltip
      title={title}
      placement={placement}
      color={theme.color.text.main}
      bgc={theme.color.white.main}
      fontFamily={theme.font.text.main}
      fontSize={theme.sizing.normal}
    >
      {children}
    </Tooltip>
  );
};
