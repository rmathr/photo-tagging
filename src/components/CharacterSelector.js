import React, { useState, Suspense } from 'react';

import Cards from './Cards';
// const Cards = React.lazy(() => import('./Cards'));

import characters from './CharacterData';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CharacterSelector = (props) => {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    let dim = event.target.getBoundingClientRect();
    let [x, y] = props.getClickCoords(event);
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2 + props.radius,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  // -------------------------------------------------------
  const charsArray = [...characters];
  let charCards = charsArray.map((character) => (
    <MenuItem
      sx={{ bgcolor: 'black' }}
      key={'' + character.xCoord + character.yCoord}
      onClick={handleClose}
    >
      {' '}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Cards character={character} />
      {/* </Suspense> */}
    </MenuItem>
  ));

  return (
    <div onClick={handleContextMenu} style={{ cursor: 'context-menu' }}>
      {props.children}
      <Menu
        disableAutoFocusItem={true}
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? // ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
      >
        {charCards}
      </Menu>
    </div>
  );
};

export default CharacterSelector;
