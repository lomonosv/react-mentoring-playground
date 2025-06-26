import React from 'react';
import styles from './hugeList.module.scss';

interface IProps {
  onChange: (value: string) => void;
}

const listLength = 2e3;

const HugeList = ({ onChange }: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const list = Array.from({ length: listLength }, (_, index) => (
    <label
      key={ index }
      className={ styles.listItem }
    >
      <input
        name="huge-list"
        type="radio"
        value={ index + 1 }
        onChange={ handleChange }
      />
      Select { index + 1 }
    </label>
  ));

  return (
    <div>
      Select an item from the list of { listLength } items:
      <div className={ styles.listWrapper }>
        { list }
      </div>
    </div>
  );
}

export default HugeList;
