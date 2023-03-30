import React from 'react';

import styled from 'styled-components';

interface SplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
  leftWeight: number;
  rightWeight: number;
}

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{ weight: number }>`
  flex: ${(props) => props.weight};
`;

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen;
