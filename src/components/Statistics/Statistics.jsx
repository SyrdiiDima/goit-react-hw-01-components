import PropTypes from 'prop-types'
import css from './Statistics.module.css'


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
    return  <section className={css.statistics}>
    { title && <h2 className={css.title}>{title}</h2>}        
        <ul className = {css.table}>
             {stats.map(( {id, label, percentage}) => (
             <li className={css.item} style = {{backgroundColor: getRandomHexColor()}} key={id}>
                 <span className="label">{label}</span>
                 <span className="percentage">{percentage}%</span>
             </li>
            ))}
        </ul>  
    </section>
}



export default Statistics


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats:PropTypes.arrayOf(PropTypes.shape).isRequired
}