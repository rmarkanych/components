import PropTypes from "prop-types";
import css from './Statistics.module.css'

const Statistics = ({ stats }) => {
  return (
<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>
    <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        )
      }   
      )}
    </ul>
    </section>
  )
}

Statistics.propTypes = {
  id: PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.number,
}

export default Statistics