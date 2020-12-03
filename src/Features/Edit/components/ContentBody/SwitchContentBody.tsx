import React from 'react';
import { Information } from './Information/Information';
import { SettingUp } from './SettingUp/SettingUp';
import { Disbursement } from './Disbursement/Disbursement';
import { PostDisbursement } from './PostDisbursement/PostDisbursement';

interface IProps {
  current: string;
}

export const SwitchContentBody: React.FC<IProps> = ({ current }): React.ReactElement | null => {
  switch (current) {
    case '1':
      return <Information />;
    case '2':
      return <SettingUp />;
    case '3':
      return <Disbursement />;
    case '4':
      return <PostDisbursement />;
  }

  return null;
};
