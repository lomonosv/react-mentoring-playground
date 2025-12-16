import type { IInnerChild } from './IInnerChild';

export interface ISecondChild {
  getSecondChildName(): string,
  getInnerChild() : IInnerChild,
}
