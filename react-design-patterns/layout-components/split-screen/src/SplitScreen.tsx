import React from 'react';

import styled from 'styled-components';

interface SplitScreenProps {
  children: React.ReactNode[];
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
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
