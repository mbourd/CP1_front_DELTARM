import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import { SvgIconProps } from '@mui/material';

export const AuditIcon: React.FC<React.PropsWithChildren<SvgIconProps>> = (
  props,
) => <DescriptionIcon {...props} />;
