import React from 'react';

import WithAuth from './WithAuth';

const ResearcherOnly = ({ children }) => (
  <WithAuth
    requiredUserType="researcher"
  >
    {children}
  </WithAuth>
);

export default ResearcherOnly;
