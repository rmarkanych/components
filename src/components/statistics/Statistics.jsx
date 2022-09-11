import PropTypes from "prop-types";
import css from './Statistics.module.css'

const Statistics = ({stats}) => 
    <ul className={css.list}>
      {stats.map(({id,label,percentage}) => 
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
      )}
  </ul>
  
Statistics.propTypes = {
  id: PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.number,
}

export default Statistics