import React, { useState, useContext, Suspense } from 'react';
import { CharacterDataContext } from './CharacterDataContext';

import Cards from './Cards';
// const Cards = React.lazy(() => import('./Cards'));

import characterData from './CharacterData';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CharacterSelector = (props) => {
  const { characters, setCharacters } = useContext(CharacterDataContext);
  let remainingCharacters = characters.filter((character) => !character.found);
  //   console.log(characters);

  const [contextMenu, setContextMenu] = useState(null);
  //   const [characters, setCharacters] = useState([...characterData]);

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

  const handleClose = (character) => {
    const characterCircle = {
      center: [character.xCoord, character.yCoord],
      radius: 1,
    };
    setCharacters(
      characters.filter((char) => {
        if (char.name === character.name) {
          char.found = props.verifyCharacter(characterCircle);
        }
        return char;
      })
    );

    setContextMenu(null);
  };

  // -------------------------------------------------------
  const charsArray = [...characters];
  let charCards = charsArray
    .filter((character) => !character.found)
    .map((character) => (
      <MenuItem
        sx={{ bgcolor: 'black' }}
        key={'' + character.xCoord + character.yCoord}
        onClick={() => handleClose(character)}
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
      {remainingCharacters.length > 0 && (
        <Menu
          disableAutoFocusItem={true}
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          {charCards}
        </Menu>
      )}
    </div>
  );
};

export default CharacterSelector;
