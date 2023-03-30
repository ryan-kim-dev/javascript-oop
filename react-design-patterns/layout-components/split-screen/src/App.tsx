import React from 'react';
import GlobalStyle from './GlobalStyle';
import SplitScreen from './SplitScreen';

const LeftComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left</h1>;
};
const RightComponent = () => {
  return <p style={{ backgroundColor: 'red' }}>Right</p>;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent />
        <RightComponent />
      </SplitScreen>
    </>
  );
}

export default App;
