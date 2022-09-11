import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendList=({ friends }) =>{
  return  (<ul className={css.list}>
    {friends.map(({ avatar, id, isOnline, name }) => {
           return ( <li className={css.item} key={id}>
      <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48"/>
      <p className={css.name}>{name}</p>
</li>  )
    }
)}
</ul>)
 }
 
FriendList.propTypes = {
  id: PropTypes.string,
  avatar:PropTypes.string,
  name:PropTypes.string,
}

export default FriendList