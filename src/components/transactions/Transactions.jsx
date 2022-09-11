import PropTypes from "prop-types";
import css from './Transactions.module.css'

const TransactionHistory = (transactions) => {
  return (<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody >
      {transactions.items.map(({ id,type, amount, currency})=>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
        </tr>
       )}  
  </tbody>
  </table>)
}
  
TransactionHistory.propTypes ={
id: PropTypes.string,
type: PropTypes.string,
amount: PropTypes.string,
currency: PropTypes.string,
}

export default TransactionHistory