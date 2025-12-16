import { inject, injectable } from 'inversify';
import { DITypes } from '../DI/DITypes';
import type { IMain } from '../DI/interfaces/IMain';
import type { IFirstChild } from '../DI/interfaces/IFirstChild';
import type { ISecondChild } from '../DI/interfaces/ISecondChild';

@injectable()
export class Main implements IMain {
  constructor(
    @inject(DITypes.FirstChild) private readonly firstChild: IFirstChild,
    @inject(DITypes.SecondChild) private readonly secondChild: ISecondChild,
  ) {
    console.log('Main');
    console.log('-------------')
  }

  getMainName(): string {
    return 'Main';
  }
}
