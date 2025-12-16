import type { IInnerChild } from './IInnerChild';

export interface IFirstChild {
  getFirstChildName(): string,
  getInnerChild() : IInnerChild,
}
