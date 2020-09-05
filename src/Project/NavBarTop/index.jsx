import React from 'react';
import { useDispatch } from 'react-redux';
import { allActions } from 'Shared/Redux';

// import PropTypes from 'prop-types';

import { NavBar, ItemText, Item } from './styles';

const NavBarTop = () => {
  const dispatch = useDispatch();

  const items = ['Home', 'Portfolio', 'Resume', 'Contact'];

  const handlePageChange = (index) => {
    dispatch(allActions.appActions.changeActivePage(index));
  };

  return (
    <NavBar>
      {items.map((text, index) => (
        <Item key={text} onClick={() => handlePageChange(index)}>
          <ItemText>{text}</ItemText>
        </Item>
      ))}
    </NavBar>
  );
};

export default NavBarTop;
