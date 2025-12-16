import { inject, injectable } from 'inversify';
import { DITypes } from '../DI/DITypes';
import type { IFirstChild } from '../DI/interfaces/IFirstChild';
import type { IInnerChild } from '../DI/interfaces/IInnerChild';

@injectable()
export class FirstChild implements IFirstChild {
  constructor(
    @inject(DITypes.InnerChild) private readonly innerChild: IInnerChild,
  ) {
    console.log('- - - - First Child');
  }

  getFirstChildName(): string {
    return 'FirstChild';
  }
}
