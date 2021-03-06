import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RaisedButton,
} from 'material-ui';

import { encodeQueryConfig, fetchAggregatedData } from '../actions/database-connector';
import ChartDisplayer from '../components/ChartDisplayer';
import ChartVariablesController from '../components/ChartVariablesController';
import dates from '../util/dates';

    // constant function to query data for charts
const validateChartQueryData = (chartQueryData) => {
  const {
    chartType,
    endDate,
    startDate,
  } = chartQueryData;
  return chartType && endDate && startDate;
};

    // function to create url
const makeDownloadUrl = (chartQueryData, formatType) => (
  `${process.env.REACT_APP_PHP_API_URL}?${encodeQueryConfig(chartQueryData)}&type=${formatType}`
);

    // style for buttons
const styles = {
  flexButtons: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

    // component for chart views
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

      //function to handle when date is chosen
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

      //function to handle when gender is chosen
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

      //function to handle when sports field is chosen
  handleSportsFieldChange(event, key, value) {
    this.setState({
      chartQueryData: {
        ...this.state.chartQueryData,
        sports: value,
      }
    });
  }

    //function to handle when chart type is chosen
  handleChartTypeChange(event, key, value) {
    this.setState({
      chartQueryData: {
        ...this.state.chartQueryData,
        chartType: value
      }
    });
  }

    //function to fetch data from backend server
  fetchChartData() {
    // Reset the chartData
    this.setState({
      chartData: [],
    });
    const { chartQueryData } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchAggregatedData(chartQueryData))
      .then((chartData) => {
        this.setState({
          chartData,
        });
      });
  }

    //render the user input and charts
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
        <div style={styles.flexButtons}>
          <RaisedButton
            disabled={!validateChartQueryData(chartQueryData)}
            className="inline-button"
            label="Fetch Data"
            onTouchTap={this.fetchChartData}
            primary
            type="submit"
          />
          <RaisedButton
            className="inline-button"
            label="View data as a table"
            href={makeDownloadUrl(chartQueryData, 'html')}
            target="_blank"
            disabled={!(chartData.length)}
            primary
          />
          <RaisedButton
            className="inline-button"
            label="Download data as CSV"
            href={makeDownloadUrl(chartQueryData, 'csv')}
            target="_blank"
            disabled={!(chartData.length)}
            primary
          />
        </div>
        <ChartDisplayer chartData={chartData} />
      </div>
    );
  }
}

export default connect()(ChartsView);
