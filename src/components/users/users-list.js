import { useDispatch, useSelector } from 'react-redux'
import { isFilterToggle, getId } from '../../actions'

import UsersItem from './users-item'
import Spinner from '../spinner/Spinner'

import './users.scss'

const UsersList = () => {
    const dispatch = useDispatch()
    const { userLoadingStatus, users } = useSelector((store) => store)

    if (userLoadingStatus === 'fetching') {
        return <Spinner />
    } else if (userLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
    const usersList = users.map((item) => {
        const strSplit = item.name.split(' ')
        const strName = strSplit[0][0] + strSplit[1][0]

        return (
            <UsersItem
                key={item.id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                strName={strName}
                onFilterPostsToName={() => {
                    dispatch(getId(item.id))
                    dispatch(isFilterToggle(true))
                }}
            />
        )
    })

    return (
        <section className="users">
            <div className="containerr">
                <div className="users__wrapper">{usersList}</div>
            </div>
        </section>
    )
}

export default UsersList
