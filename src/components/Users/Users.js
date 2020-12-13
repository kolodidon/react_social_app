import React from 'react';
import s from './Users.module.scss'
import * as axios from 'axios'
import Ava from "../../assets/Ava.png";


class Users extends React.Component {
    constructor(props){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
                this.props.setUsers(responce.data.items)
        })
    }
    render() {
        return(
            <div className={s.main}>
            {
                this.props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={ u.photos.small !== null ? u.photos.small : Ava } alt='avatar'/>
                        </div>
                    </span>
                    <span>
                        {u.followed ? <button onClick={ () => this.props.unfollow(u.id) }>Unfollow</button> : <button onClick={ () => this.props.follow(u.id) }>Follow</button>}
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>Russia</div>
                            <div>Moscow</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
        )
    }
}

export default Users