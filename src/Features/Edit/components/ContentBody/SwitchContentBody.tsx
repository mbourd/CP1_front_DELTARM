import React from 'react';
import { Information } from './Information/Information';
import { SettingUp } from './SettingUp/SettingUp';
import { Disbursement } from './Disbursement/Disbursement';
import { PostDisbursement } from './PostDisbursement/PostDisbursement';
import { storage } from 'Services';

export const SwitchContentBody: React.FC = (): React.ReactElement | null => {
  switch (storage.getData('edit.section.active')) {
    case 'INFO':
      return <Information />;
    case 'MEP':
      return <SettingUp />;
    case 'DEC_1':
      return <Disbursement />;
    case 'DEC_2':
      return <Disbursement />;
    case 'DEC_3':
      return <Disbursement />;
    case 'DEC_4':
      return <Disbursement />;
    case 'DEC_5':
      return <Disbursement />;
    case 'DEC_6':
      return <Disbursement />;
    case 'DEC_7':
      return <Disbursement />;
    case 'DEC_8':
      return <Disbursement />;
    case 'DEC_9':
      return <Disbursement />;
    case 'DEC_10':
      return <Disbursement />;
    case 'POST_DEC':
      return <PostDisbursement />;
  }

  return null;
};
