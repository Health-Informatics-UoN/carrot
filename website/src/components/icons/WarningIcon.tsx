import React from 'react';

const WarningIcon: React.FC = () => (
  <span style={{ display: "inline-flex", alignItems: "center" }}>
    <img
      src="/icons/favicon-warning-icon16x16.png"
      alt="Warning Icon"
      width={18}
      height={18}
      style={{
        verticalAlign: "middle",
        marginRight: "4px",
      }}
    />
  </span>
);

export default WarningIcon;
