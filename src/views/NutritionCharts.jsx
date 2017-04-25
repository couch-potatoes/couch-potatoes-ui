import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';
import { RaisedButton } from 'material-ui';

var db_data = [];
fetch('https://potatoes-db.herokuapp.com/db.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'chart=nutrition',
}).then(response => {
  return response.json();
}).then(
  return_data => {
    var count = 0;
    var objArray = Object.keys(return_data).map((row) => return_data[row]);
    db_data[count] = ['Date', 'Calories', 'Carbs (g)', 'Fat (g)', 'Protein (g)'];
    objArray.map((col) => {
      count++;
      db_data[count] = [col.date, parseInt(col.calories, 10), parseInt(col.carbs, 10), parseInt(col.proteins, 10), parseInt(col.fats, 10)];
      return db_data;
    });
  }
);
export class NutritionCharts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lineChartOptions: {
        title: 'Daily Average Nutrition Consumed Reported By Students',
        hAxis: { title: 'Date'},
        vAxis: { title: 'Amount'},
        legend: 'all',
      },
      barChartOptions: {
        title: 'Daily Average Nutrition Consumed Reported By Students',
        hAxis: { title: 'Amount'},
        vAxis: { title: 'Date'},
        legend: 'all',
      },
      data: db_data,
    };
  }
  
  render() {
    const { userType } = this.props;
    if (userType === 'researcher' && !!db_data[0]) {
      return (
        <div id='researcher-charts'>
          <div className="option-buttons">
            <RaisedButton
              className='inline-button'
              label='View data as a table'
              href='https://potatoes-db.herokuapp.com/db.php?chart=nutrition&type=html'
              target='_blank'
              primary
            />
            <RaisedButton
              className='inline-button'
              label='Download data as CSV'
              href='https://potatoes-db.herokuapp.com/db.php?chart=nutrition&type=csv'
              target='_blank'
              primary
            />
          </div>
          <Chart
            chartType="BarChart"
            data={this.state.data}
            options={this.state.barChartOptions}
            graph_id="BarChart"
            width="100%"
            height="600px"
            legend_toggle
          />
          <Chart
            chartType="LineChart"
            data={this.state.data}
            options={this.state.lineChartOptions}
            graph_id="LineChart"
            width="100%"
            height="600px"
            legend_toggle
          />
        </div>
      );
    }
    else {
      return (
        <div id='researcher-charts'>
          <h2> Sorry, You do not have access to this page. </h2>
        </div>
      );
    }
  }
}

NutritionCharts.propTypes = {
  userType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const {
    account: {
      userType,
    },
  } = state;
  return {
    userType,
  };
};

export default withRouter(connect(mapStateToProps)(NutritionCharts));
