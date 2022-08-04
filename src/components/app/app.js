import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { usersFetching, usersFetched, usersFetchedError } from '../../actions'
import { useDispatch } from 'react-redux'

import Header from '../header/header'
import PostsList from '../posts/posts-list'
import UsersList from '../users/users-list'
import Post from '../post/post'
import request from '../http/http'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersFetching())
        request('https://jsonplaceholder.typicode.com/users')
            .then((data) => dispatch(usersFetched(data)))
            .catch(() => dispatch(usersFetchedError()))
        // eslint-disable-next-line
    }, [])

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<PostsList />} />
                <Route exact path="/users" element={<UsersList />} />
                <Route exact path="/post/:postId" element={<Post />} />
            </Routes>
        </Router>
    )
}

export default App
