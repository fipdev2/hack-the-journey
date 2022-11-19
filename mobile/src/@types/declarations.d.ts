declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png'

export declare global {
  namespace ReactNavigation {
      interface RootParamList {
          signin: undefined;
          payment: undefined;
      }
  }
}