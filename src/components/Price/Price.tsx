import React from 'react';

interface Props {
  number: number;
}

const Price:  React.FC<Props> = ({number}) => {
  return (
    <div>
      <div>Price {number}</div>
    </div>
  );
};

export default Price;