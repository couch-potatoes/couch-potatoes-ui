import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';
import { 
  RaisedButton, 
  DatePicker,
  MenuItem,
  SelectField,
} from 'material-ui';

import SPORTS from '../util/constants/sports';

const db_data = [];

const connectDB = (request) => {

  fetch('http://localhost/db/db.php', { //'https://potatoes-db.herokuapp.com/db.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: request,
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
};

  //get data from database for initial chart rendering
connectDB('chart=nutrition');

const getSports = (gender) => {
  if (gender) {
    return SPORTS[gender].map(sport => (
      <MenuItem
        {...sport}
        key={sport.value}
      />
    ));
  }
  return null;
};

const genderNotChosen = () => {
  return (<MenuItem value='na' disabled primaryText='Choose Gender First' key='na'/>);
};

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
      ChartData: db_data,
      today: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      gender: 'na',
      sport: 'na',
      sportItems: genderNotChosen(),
    };

    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
    this.selectGender = this.selectGender.bind(this);
    this.selectSport = this.selectSport.bind(this);
    this.RequestCharts = this.RequestCharts.bind(this);
  }
  
  changeStartDate (_, e){
    this.setState({
      startDate: e,
    });
  }

  changeEndDate (_, e){
    this.setState({
      endDate: e
    });
  }

  selectGender (event, index, value) {
    this.setState({
      gender: value,
    });
    if (value !== 'na'){
      this.setState({
        sportItems: getSports(value),
      });
    }
    else this.setState({
      sport: 'na',
      sportItems: genderNotChosen(),
    });
  }

  selectSport (event, index, value) {
    this.setState({
      sport: value
    });
  }

  RequestCharts (){
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.gender);
    console.log(this.state.sport);
    connectDB(
      'chart=nutrition&startDate=' + this.state.startDate
      + '&endDate=' + this.state.endDate
      + '&gender=' + this.state.gender
      + '&sport=' + this.state.sport
    );
    this.setState({ChartData: db_data});
  }

  render() {
    const { userType } = this.props;

    if (true){//userType === 'researcher' && !!db_data[0]) {
      return (
        <div id="researcher-charts">
          <div className="page-title"> Nutrition Data Report </div>
          <div className="option-inputs">
            <DatePicker
              className="inline-input"
              floatingLabelText="Date Range - From"
              onChange={this.changeStartDate}
              defaultDate={this.state.today}
              container="inline"
              mode="landscape"
              autoOk={true}
              maxDate={this.state.endDate}
            >  
            </DatePicker>
            <DatePicker
              className="inline-input"
              floatingLabelText="Date Range - To"
              onChange={this.changeEndDate}
              defaultDate={this.state.today}
              container="inline"
              mode="landscape"
              autoOk={true}
              minDate={this.state.startDate}
              maxDate={this.state.today}
            >  
            </DatePicker>
          </div>
          <div className="option-inputs">
            <SelectField 
              className="inline-input"
              value={this.state.gender}
              onChange={this.selectGender}
              floatingLabelText='Gender'
            >
              <MenuItem value='na' primaryText="No Gender Chosen" />
              <MenuItem value='male' primaryText="Male" />
              <MenuItem value='female' primaryText="Female" />
            </SelectField>
            <SelectField
              className="inline-input"
              value={this.state.sport}
              onChange={this.selectSport}
              floatingLabelText='Sport'
            >
              {this.state.sportItems}
            </SelectField>
          </div>
          <div className="option-inputs">
            <RaisedButton
              label="Load Data"
              onTouchTap={this.RequestCharts}
              primary
            />
          </div>
          <div className="option-buttons">
            <RaisedButton
              className="inline-button"
              label="View data as a table"
              href="https://potatoes-db.herokuapp.com/db.php?chart=nutrition&type=html"
              target="_blank"
              primary
            />
            <RaisedButton
              className="inline-button"
              label="Download data as CSV"
              href="https://potatoes-db.herokuapp.com/db.php?chart=nutrition&type=csv"
              target="_blank"
              primary
            />
          </div>
          <Chart
            chartType="BarChart"
            data={this.state.ChartData}
            options={this.state.barChartOptions}
            graph_id="BarChart"
            width="100%"
            height="600px"
            legend_toggle
          />
          <Chart
            chartType="LineChart"
            data={this.state.ChartData}
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
