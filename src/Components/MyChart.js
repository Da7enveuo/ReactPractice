import React from 'react';
import { Chart } from 'react-charts'
import './MyChart.css'

function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [{ x: 1, y: 30 }, { x: 2, y: 20 }, { x: 3, y: 10 }]
        },
        {
          label: 'Series 2',
          data: [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }]
        },
        {
          label: 'Series 3',
          data: [{ x: 1, y: 14 }, { x: 2, y: 19 }, { x: 3, y: 11 }]
        }
      ],
      []
    )
    
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'top', textColor: 'white' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
  
    return (
      <div className="Graph">
        <Chart data={data} axes={axes} />
      </div>
    )
  }

  export default MyChart