import React from 'react';

import WithAuth from './WithAuth';

    //handle for restricing researcher only access
const ResearcherOnly = ({ children }) => (
  <WithAuth
    requiredUserType="researcher"
  >
    {children}
  </WithAuth>
);

export default ResearcherOnly;
