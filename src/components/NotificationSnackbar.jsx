import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import { closeNotification } from '../actions/notifications';

    //function to handle showing notifications
const NotificationSnackbar = (props) => {
  const {
    closeNotification,
    displayed,
    message,
  } = props;

    //show a little bar at the bottom
  return (
    <Snackbar
      open={displayed}
      message={message}
      autoHideDuration={5000}
      onRequestClose={closeNotification}
    />
  );
};

NotificationSnackbar.propTypes = {
  closeNotification: PropTypes.func.isRequired,
  displayed: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

    //get message for notification
NotificationSnackbar.defaultProps = {
  message: '',
};

const mapDispatchToProps = (dispatch) => ({
  closeNotification: () => { dispatch(closeNotification()); }
});

const mapStateToProps = (state) => {
  const {
    notifications: {
      displayed,
      messages,
    },
  } = state;
  return {
    displayed,
    message: messages[0],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSnackbar);
