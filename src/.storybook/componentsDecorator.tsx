/* eslint-disable react/display-name */
import React from 'react';
import {
  SetupTestsComponentPropsType,
  SetupTestsComponents,
} from './SetupTestsComponents';

const componentsDecorator =
  (props: SetupTestsComponentPropsType) => (Story) => {
    return (
      <SetupTestsComponents {...props}>
        <Story />
      </SetupTestsComponents>
    );
  };

export { componentsDecorator };
