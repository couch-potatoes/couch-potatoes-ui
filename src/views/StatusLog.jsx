import React, { Component } from 'react';
import {
  DatePicker,
  FlatButton,
} from 'material-ui';

import StatusCard from '../components/StatusCard';
import dates from '../util/dates';

class StatusLog extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDate: dates.currentDate,
      statusEntry: {
        calories: 0,
        carbs: 0,
        didEatBreakfast: false,
        energyLevel: 0,
        fats: 0,
        hoursOfExercise: 0,
        hoursOfSleep: 0,
        numOfMeals: 0,
        proteins: 0,
        sleepQuality: 0,
        stressLevel: 0,
      },
      isOpened: {
        nutrition: true,
        wellness: true,
        fitness: true,
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCardExpandedChange = this.handleCardExpandedChange.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  handleCardExpandedChange(section) {
    return (newState) => {
      console.log('section', section);
      console.log('newState', newState);
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
          container="inline"
          mode="landscape"
          locale="en-US"
          value={currentDate}
          minDate={dates.minDate}
          maxDate={dates.maxDate}
        />
        <FlatButton
          label="Expand All"
          onTouchTap={this.expandAll}
        />
        <FlatButton
          label="Collapse All"
          onTouchTap={this.collapseAll}
        />
        <StatusCard
          disabled={false}
          isOpened={isOpened}
          statusEntry={statusEntry}
          handleInputChange={this.handleInputChange}
          handleCardExpandedChange={this.handleCardExpandedChange}
        />
      </div>
    );
  }
}

export default StatusLog;
