import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  RaisedButton,
} from 'material-ui';

import { fetchAggregatedData } from '../actions/database-connector';
import ChartDisplayer from '../components/ChartDisplayer';
import ChartVariablesController from '../components/ChartVariablesController';
import dates from '../util/dates';

const validateChartQueryData = (chartQueryData) => {
  const {
    chartType,
    endDate,
    gender,
    sports,
    startDate,
  } = chartQueryData;
  return chartType && endDate && gender && sports.length && startDate;
};

class ChartsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartQueryData: {
        chartType: '',
        endDate: dates.currentDate,
        gender: '',
        sports: [],
        startDate: dates.yesterday,
      },
      chartData: [],
    };
    this.handleChartTypeChange = this.handleChartTypeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGenderFieldChange = this.handleGenderFieldChange.bind(this);
    this.handleSportsFieldChange = this.handleSportsFieldChange.bind(this);
    this.fetchChartData = this.fetchChartData.bind(this);
  }

  handleDateChange(key) {
    return (_, value) => {
      this.setState({
        chartQueryData: {
          ...this.state.chartQueryData,
          [key]: value,
        },
      });
    };
  }

  handleGenderFieldChange(event, key, value) {
    this.setState({
      chartQueryData: {
        ...this.state.chartQueryData,
        gender: value,
        // Reset the sports value if the user change gender value
        sports: [],
      }
    });
  }

  handleSportsFieldChange(event, key, value) {
    this.setState({
      chartQueryData: {
        ...this.state.chartQueryData,
        sports: value,
      }
    });
  }

  handleChartTypeChange(event, key, value) {
    this.setState({
      chartQueryData: {
        ...this.state.chartQueryData,
        chartType: value
      }
    });
  }

  fetchChartData() {
    const { chartQueryData } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchAggregatedData(chartQueryData))
      .then((chartData) => {
        this.setState({
          chartData,
        });
      });
  }

  render() {
    const {
      chartData,
      chartQueryData,
    } = this.state;
    return (
      <div>
        <h1>View Data</h1>
        <ChartVariablesController
          chartQueryData={chartQueryData}
          handleChartTypeChange={this.handleChartTypeChange}
          handleDateChange={this.handleDateChange}
          handleGenderFieldChange={this.handleGenderFieldChange}
          handleSportsFieldChange={this.handleSportsFieldChange}
        />
        <RaisedButton
          disabled={!validateChartQueryData(chartQueryData)}
          className="inline-button"
          label="Fetch Data"
          onTouchTap={this.fetchChartData}
          primary
          type="submit"
        />
        <ChartDisplayer chartData={chartData} />
      </div>
    );
  }
}

ChartsView.propTypes = {
  dispatchFetchChartData: PropTypes.func.isRequired,
};

export default connect()(ChartsView);
