import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = ({ signOut }) => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem onTouchTap={signOut} primaryText="Sign out" />
  </IconMenu>
);

Menu.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Menu;
