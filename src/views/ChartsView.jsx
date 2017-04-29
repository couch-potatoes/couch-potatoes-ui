import React, { Component } from 'react';

import ChartTypeSelector from '../components/ChartTypeSelector';
import ChartVariablesController from '../components/ChartVariablesController';

class ChartsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: '',
      chartQueryData: {
        startDate: '',
        endDate: '',
        gender: '',
        sports: '',
      }
    };
    this.onChartTypeChange = this.onChartTypeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGenderFieldChange = this.handleGenderFieldChange.bind(this);
    this.handleSportsFieldChange = this.handleSportsFieldChange.bind(this);
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

  onChartTypeChange(event, key, value) {
    this.setState({
      chartType: value
    });
  }

  render() {
    const {
      chartType,
      chartQueryData,
    } = this.state;
    return (
      <div>
        <h1>View Data</h1>
        <ChartTypeSelector
          onChange={this.onChartTypeChange}
          value={chartType}
        />
        <ChartVariablesController
          chartQueryData={chartQueryData}
          handleDateChange={this.handleDateChange}
          handleGenderFieldChange={this.handleGenderFieldChange}
          handleSportsFieldChange={this.handleSportsFieldChange}
        />
      </div>
    );
  }

}

export default ChartsView;
