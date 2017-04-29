import React, { Component } from 'react';

import ChartTypeSelector from '../components/ChartTypeSelector';

class ChartsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: '',
    };
    this.onChartTypeChange = this.onChartTypeChange.bind(this);
  }

  onChartTypeChange(event, key, value) {
    this.setState({
      chartType: value
    });
  }

  render() {
    const {
      chartType,
    } = this.state;
    return (
      <div>
        <ChartTypeSelector
          onChange={this.onChartTypeChange}
          value={chartType}
        />
      </div>
    );
  }

}

export default ChartsView;
