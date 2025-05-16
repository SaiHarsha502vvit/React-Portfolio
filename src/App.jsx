import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import CustomCursor from './components/common/CustomCursor';

function PageTransitionWrapper({ children }) {
  const [transitionStage, setTransitionStage] = useState('fade-enter');

  useEffect(() => {
    setTransitionStage('fade-enter');
    const timeout = setTimeout(() => setTransitionStage('fade-enter-active'), 10);
    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div className={`page-transition-fade-${transitionStage.replace('fade-', '')}`}>{children}</div>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <PageTransitionWrapper>
        <Routes />
      </PageTransitionWrapper>
    </>
  );
}

export default App;
