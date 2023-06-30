import * as React from 'react';
import Cards from './Cards';
import characters from './CharacterData';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const CharacterSelector = (props) => {
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    let dim = event.target.getBoundingClientRect();
    let [x, y] = props.getClickCoords(event);
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2 + props.radius,
            // mouseX: x,
            // mouseY: y,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  // -------------------------------------------------------
  const charsArray = [...characters];
  let charCards = charsArray.map((character) => (
    <MenuItem key={'' + character.xCoord + character.yCoord} onClick={handleClose}>
      {' '}
      <Cards character={character} />
    </MenuItem>
  ));

  return (
    <div onClick={handleContextMenu} style={{ cursor: 'context-menu' }}>
      {props.children}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? // ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {charCards}
      </Menu>
    </div>
  );
};

export default CharacterSelector;
