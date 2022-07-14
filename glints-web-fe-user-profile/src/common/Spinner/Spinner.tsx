import React from 'react';

import { Circles } from  'react-loader-spinner'
import { FullSpaceContainer, PositioningContainer } from './Spinner.styles';

type Props = {
  isFullSpace: boolean;
};

export default function Spinner(props: Props) {
  const { isFullSpace } = props;

  const spinnerElement = (
    <PositioningContainer data-testid="positioning-container">
      <Circles color="#00BFFF" height={80} width={80} />
    </PositioningContainer>
  );

  return isFullSpace ? (
    <FullSpaceContainer data-testid="fullspace-container">{spinnerElement}</FullSpaceContainer>
  ) : (
    spinnerElement
  );
}

Spinner.defaultProps = {
  isFullSpace: false,
};
