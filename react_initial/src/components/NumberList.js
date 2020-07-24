import React from 'react';
import Proptypes from 'prop-types';

function NumberList({ numbers }) {
  function list() {
    const listItems = numbers.map((number, index) => (
      // Apenas faça isso caso os itens não possuam IDs estáveis
      <li key={index}>
        <b>index:</b>
        {' '}
        {index}
        {' '}
        |
        {' '}
        <b>text:</b>
        {number.text}
      </li>
    ));
    return listItems;
  }
  return <ul>{list()}</ul>;
}
NumberList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  numbers: Proptypes.array.isRequired,
};
export default NumberList;
