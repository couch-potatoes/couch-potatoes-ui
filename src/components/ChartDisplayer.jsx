import React, { PropTypes } from 'react';
import { Chart } from 'react-google-charts';

const lineChartOptions = {
  title: 'Daily Nutritional Statistics as Reported by Students',
  hAxis: { title: 'Date' },
  vAxis: { title: 'Amount' },
  legend: 'all',
};

const barChartOptions = {
  title: 'Daily Nutritional Statistics as Reported by Students',
  vAxis: { title: 'Amount' },
  hAxis: { title: 'Date' },
  legend: 'all',
};

const ChartDisplayer = ({ chartData }) => {
  if (chartData.length) {
    return (
      <div>
        <Chart
          chartType="BarChart"
          data={chartData}
          options={barChartOptions}
          graph_id="BarChart"
          width="100%"
          height="600px"
          legend_toggle
        />
        <Chart
          chartType="LineChart"
          data={chartData}
          options={lineChartOptions}
          graph_id="LineChart"
          width="100%"
          height="600px"
          legend_toggle
        />
      </div>
    );
  }
  // Render nothing if there is no data to display
  return null;
};

ChartDisplayer.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default ChartDisplayer;
