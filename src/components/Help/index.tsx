import React from 'react';
import SupportHeader from './SupportHeader';
import SupportOptions from './SupportOptions';
import HelpSearch from './HelpSearch';
import HelpCategories from './HelpCategories';

function Help() {
  return (
    <div className="pb-20">
      {/* Support Header with Coach */}
      <SupportHeader />

      {/* Support Options (Request Feature, Report Bug) */}
      <SupportOptions />

      {/* Help Search */}
      <HelpSearch />

      {/* Help Categories */}
      <HelpCategories />
    </div>
  );
}

export default Help;