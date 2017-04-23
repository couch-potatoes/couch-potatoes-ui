import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';
export class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Nutrition Chart',
        hAxis: { title: 'Date'},
        vAxis: { title: 'Amount'},
        legend: 'all',
      },
      data: this.getData(),
    };
  }
  
  render() {
    return (
      <div id="Research-BarChart"> 
        <Chart
          chartType="LineChart"
          data={this.state.data}
          options={this.state.options}
          graph_id="LineChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }

  getData(){
    var db_data = [];
    fetch('https://potatoes-db.herokuapp.com/db.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'chart=daily-average',
    }).then(response => {
      return response.json();
    }).then(
      return_data => {
        var count = 0;
        var objArray = Object.keys(return_data).map((row) => return_data[row]);
        db_data[count] = ['Date', 'Calories', 'Carbs (g)', 'Fat (g)', 'Protein (g)'];
        objArray.map((col) => {
          count++;
          db_data[count] = [col.date, parseInt(col.calories), parseInt(col.carbs), parseInt(col.proteins), parseInt(col.fats)];
        });

        console.log(db_data);
        return db_data;
      }
    );
  }
}

export default withRouter(connect()(Test));
