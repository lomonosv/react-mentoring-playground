import { ContainerModule as InversifyContainerModule } from 'inversify';
import { DITypes } from './DITypes';
import { Main } from '../dependencies/Main';
import { FirstChild } from '../dependencies/FirstChild';
import { SecondChild } from '../dependencies/SecondChild';
import { InnerChild } from '../dependencies/InnerChild';
import type { IMain } from './interfaces/IMain';
import type { IFirstChild } from './interfaces/IFirstChild';
import type { ISecondChild } from './interfaces/ISecondChild';
import type { IInnerChild } from './interfaces/IInnerChild';

export const ContainerModule = new InversifyContainerModule(({ bind }) => {
  // TODO: Make a Module with bindings...
});


// inTransientScope - the shortest lifecycle. New instance for each request
// inRequestScope - new instance for one dependency graph
// inSingletonScope - single instance for the whole application

// Depends on the top level scope


// Tasks:
// 1. Create Inner Child as unique instance for each dependency
// 2. Create Inner Child as a Singleton for each request in the same dependency graph
// 3. Create Inner Child as a Singleton for the entire application
// 4. Make Inner Child Factory and bind it as a Factory
