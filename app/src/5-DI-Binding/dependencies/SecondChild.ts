import { inject, injectable } from 'inversify';
import type { ISecondChild } from '../DI/interfaces/ISecondChild';
import { DITypes } from '../DI/DITypes';
import type { IInnerChild } from '../DI/interfaces/IInnerChild';

@injectable()
export class SecondChild implements ISecondChild {
  constructor(
    @inject(DITypes.InnerChild) private readonly innerChild: IInnerChild,
  ) {
    console.log('- - - - Second Child');
  }

  getSecondChildName(): string {
    return 'SecondChild';
  }
}
