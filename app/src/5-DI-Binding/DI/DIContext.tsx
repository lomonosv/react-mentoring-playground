import React, { createContext, useContext, useState, useEffect } from 'react';
import { Container } from './Container';
import { createContainer } from './createContainer';
import { ContainerModule } from '~/src/5-DI-Binding/DI/ContainerModule';

type TProps = {
  children: React.ReactNode,
};

export const DIContext = createContext<{ container: Container }>(null);

export function useDIContext() {
  const context = useContext(DIContext);
  if (!context) {
    throw new Error('useDIContext must be used within the DIContextProvider');
  }
  return context;
}

function DIContextProvider({
  children,
}: TProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contextValue, setContextValue] = useState<{ container: Container }>({ container: undefined });

  const setUpContextValue = async () => {
    const container = createContainer();

    await container.load(ContainerModule);
    const contextValue: { container: Container } = {
      container,
    };

    setContextValue(contextValue);
    setIsLoading(false);
  };

  useEffect(() => {
    setUpContextValue();
  }, []);

  return (
    <DIContext.Provider value={ contextValue }>
      { isLoading ? 'Loading...' : children }
    </DIContext.Provider>
  );
}

export default DIContextProvider;
