import 'reflect-metadata';
import DIContext, { useDIContext } from './DI/DIContext';
import { DITypes } from './DI/DITypes';
import type { IMain } from './DI/interfaces/IMain';

const DIBinding = () => {
  const { container } = useDIContext();

  const handleInstantiation = () => {
    const main = container.get<IMain>(DITypes.Main);
  }

  return (
    <div>
      <button onClick={ handleInstantiation }>Instantiate Main</button>
    </div>
  );
};

export default () => (
  <DIContext>
    <DIBinding/>
  </DIContext>
);
