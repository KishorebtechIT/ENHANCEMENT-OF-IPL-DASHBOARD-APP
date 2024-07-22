/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import {
  PieChart as PieChartComponent,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const PieChart = props => {
  const {data} = props

  return (
    <div className="pie-chart-bg-container">
      <ResponsiveContainer width="70%" height={350}>
        <PieChartComponent>
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="value"
          >
            <Cell name="Won" fill="#b3d23f" />
            <Cell name="Lost" fill="#b3d23f" />
            <Cell name="Draw" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChartComponent>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChart
