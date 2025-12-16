import { injectable } from 'inversify';
import type { IInnerChild } from '../DI/interfaces/IInnerChild';

@injectable()
export class InnerChild implements IInnerChild {
  constructor() {
    console.log('- - - - - - - - Inner Child');
  }

  getInnerChildName(): string {
    return 'InnerChild';
  }
}
