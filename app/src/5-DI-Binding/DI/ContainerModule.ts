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

export const ContainerModule = new InversifyContainerModule(({ bind, unbind, onActivation, onDeactivation }) => {
  bind<IMain>(DITypes.Main).to(Main).inSingletonScope();
  bind<IFirstChild>(DITypes.FirstChild).to(FirstChild).inSingletonScope();
  bind<ISecondChild>(DITypes.SecondChild).to(SecondChild).inSingletonScope();
  bind<IInnerChild>(DITypes.InnerChild).to(InnerChild).inSingletonScope();
});


// inTransientScope - the shortest lifecycle. New instance for each request
// inRequestScope - new instance for one dependency graph
// inSingletonScope - single instance for the whole application

// Depends on the top level scope
