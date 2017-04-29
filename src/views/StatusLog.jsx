import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DatePicker,
  FlatButton,
} from 'material-ui';

import { addNotification } from '../actions/notifications';
import {
  createStatusEntry,
  updateStatusEntry,
} from '../actions/statusEntry';
import StatusCard from '../components/StatusCard';
import CustomPropTypes from '../util/custom-prop-types';
import dates from '../util/dates';

const defaultStatusEntry = () => ({
  breakfast: false,
  calories: 0,
  carbs: 0,
  eatAfter: false,
  eatBefore: false,
  energyLevel: 0,
  exerciseLength: 0,
  fats: 0,
  numMeals: 0,
  proteins: 0,
  sleepLength: 0,
  sleepQuality: 0,
  stressLevel: 0,
});

class StatusLog extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDate: dates.currentDate,
      statusEntry: defaultStatusEntry(),
      isNewEntry: true,
      isOpened: {
        nutrition: true,
        wellness: true,
        fitness: true,
      },
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.makeSliderChangeHandler = this.makeSliderChangeHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCardExpandedChange = this.handleCardExpandedChange.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.loadStatusEntry = this.loadStatusEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
  }

  componentDidMount() {
    const { currentDate } = this.state;
    this.loadStatusEntry(currentDate.toDateString());
  }

  saveEntry() {
    const { dispatch } = this.props;
    const {
      currentDate,
      isNewEntry,
      statusEntry,
    } = this.state;

    const action = isNewEntry ? createStatusEntry : updateStatusEntry;
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + 1);
    dispatch(action(date.toDateString(), statusEntry))
      .then(() => {
        dispatch(addNotification('Saved!'));
        this.setState({
          isNewEntry: false,
        });
      }, () => {
        dispatch(addNotification('Error saving entry; please try again'));
      });
  }

  loadStatusEntry(date) {
    const dateToFetch = typeof date === 'string' ? date : date.toDateString();
    const { statusLog } = this.props;
    if (statusLog[dateToFetch]) {
      this.setState({
        statusEntry: statusLog[dateToFetch],
        isNewEntry: false,
      });
    } else {
      this.setState({
        statusEntry: defaultStatusEntry(),
        isNewEntry: true,
      });
    }
  }

  handleCardExpandedChange(section) {
    return (newState) => {
      this.setState({
        isOpened: {
          ...this.state.isOpened,
          [section]: newState,
        },
      });
    };
  }

  expandAll() {
    this.setState({
      isOpened: {
        nutrition: true,
        wellness: true,
        fitness: true,
      },
    });
  }

  collapseAll() {
    this.setState({
      isOpened: {
        nutrition: false,
        wellness: false,
        fitness: false,
      },
    });
  }

  makeSliderChangeHandler(name) {
    return (_, newValue) => {
      this.setState({
        statusEntry: {
          ...this.state.statusEntry,
          [name]: newValue
        },
      });
    };
  }

  handleDateChange(_, date) {
    this.setState({
      currentDate: date,
    });
    // Load the user's status entry for the new date
    this.loadStatusEntry(date.toDateString());
  }

  handleInputChange(event) {
    const {
      target: {
        checked,
        name,
        type,
        value,
      },
    } = event;
    switch (type) {
    case 'checkbox': {
      this.setState({
        statusEntry: {
          ...this.state.statusEntry,
          [name]: checked
        },
      });
      break;
    }
    case 'number': {
      this.setState({
        statusEntry: {
          ...this.state.statusEntry,
          [name]: Number(value),
        },
      });
      break;
    }
    default: {
      break;
    }
    }
  }

  render() {
    const {
      currentDate,
      isOpened,
      statusEntry,
    } = this.state;
    return (
      <div>
        <h1>Status Log</h1>
        <DatePicker
          name="datePicker"
          container="inline"
          mode="landscape"
          locale="en-US"
          value={currentDate}
          minDate={dates.minDate}
          maxDate={dates.currentDate}
          onChange={this.handleDateChange}
        />
        <FlatButton
          label="Expand All"
          onTouchTap={this.expandAll}
        />
        <FlatButton
          label="Collapse All"
          onTouchTap={this.collapseAll}
        />
        <FlatButton
          primary
          label="Save"
          onTouchTap={this.saveEntry}
        />
        <StatusCard
          disabled={false}
          isOpened={isOpened}
          statusEntry={statusEntry}
          handleInputChange={this.handleInputChange}
          handleSliderChange={this.makeSliderChangeHandler}
          handleCardExpandedChange={this.handleCardExpandedChange}
        />
      </div>
    );
  }
}

StatusLog.propTypes = {
  statusLog: CustomPropTypes.statusLog.isRequired,
};

const mapStateToProps = (state) => {
  const {
    account: {
      statusEntryCache: statusLog,
    },
  } = state;
  return {
    statusLog,
  };
};

export default connect(mapStateToProps)(StatusLog);
