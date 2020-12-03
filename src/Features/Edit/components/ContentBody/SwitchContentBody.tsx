import React from 'react';
import { Information } from './Information/Information';
import { SettingUp } from './SettingUp/SettingUp';

interface IProps {
  current: string;
}

export const SwitchContentBody: React.FC<IProps> = ({ current }): React.ReactElement | null => {
  switch (current) {
    case '1':
      return <Information />;
    case '2':
      return <SettingUp />;
  }

  return null;
};
