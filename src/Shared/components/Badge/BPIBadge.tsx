import React from 'react';
import { Badge, IBadge } from 'Shared/components';
import { useTheme } from 'Styles';

export const BPIBadge: React.FC<Pick<IBadge, 'content'>> = ({ children, content }): React.ReactElement => {
  const theme = useTheme();

  return (
    <Badge content={content} color={theme.color.white.main} bgc={'#FF9642'} fontFamily={theme.font.text.main}>
      {children}
    </Badge>
  );
};
