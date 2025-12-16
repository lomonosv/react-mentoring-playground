import type { IFirstChild } from './IFirstChild';
import type { ISecondChild } from './ISecondChild';

export interface IMain {
  getMainName(): string,
  getFirstChild(): IFirstChild,
  getSecondChild(): ISecondChild,
}
