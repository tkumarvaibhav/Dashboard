import React from 'react';

export type CommonHeaderTabValue = 'insurance' | 'agents';

export type CommonHeaderProps = {
  titleLeft?: React.ReactNode;
  titleRight?: React.ReactNode;
  subtitle?: React.ReactNode;
  value: CommonHeaderTabValue;
  onChange?: (value: CommonHeaderTabValue) => void;
  sticky?: boolean;
};
