import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// components
import CenterWrap from '@atom/wrap/Center';
import Example from '.';

export default {
  title: '01. example/example',
  component: Example,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const props = {};
  return (
    <>
      <Example {...props} />
    </>
  );
};
