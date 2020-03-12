import React from 'react';

import {CustomBottonContainer}from './custom-button.styles';

const CustomButton = ({children, ...props }) => (
  <CustomBottonContainer {...props}>
   {children}
  </CustomBottonContainer>
)

export default CustomButton;