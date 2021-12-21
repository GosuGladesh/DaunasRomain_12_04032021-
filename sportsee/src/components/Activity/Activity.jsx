import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

/**
 * Bar chart custom Tooltip
 *
 * @param {boolean} active If the data is hovered
 * @param {object} payload data hovered
 * @returns {node} Response
 */
function ActivityTooltip({active, payload}) {
    
    if (active) {
        return <div style={{ backgroundColor: "#FF0000", height: "60px", width: "80px", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
            <p>{payload[0].value} kg</p>
            <p>{payload[1].value} kcal</p>
        </div>
    }
    return null
}

/**
 * Activity chart component
 *
 * @param {object} props 
 * @returns {node} recharts bar chart
 */
function Activity(props) {
    
    return (
        <ResponsiveContainer>
             <BarChart data={props.activity} >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis tickCount={7} ticks={["1","2","3","4","5","6","7"]}/>
                <YAxis orientation="right"/>
                <Tooltip content={<ActivityTooltip />} /> 
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
                <Bar dataKey="calories" fill="#E60000" barSize={10}/>                
                <Legend verticalAlign="top" align="right" iconType="circle" height={40}/>
                            </BarChart>
        </ResponsiveContainer>
                           
    )
}

Activity.propTypes = {
    activity: PropTypes.array
}
export default Activity;