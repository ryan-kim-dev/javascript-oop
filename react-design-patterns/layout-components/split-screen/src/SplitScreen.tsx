import React from 'react';

import styled from 'styled-components';

interface SplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
}

const SplitScreen = ({ left: Left, right: Right }: SplitScreenProps) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen;

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;
