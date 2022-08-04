import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postsFetching, postsFetched, postsFetchedError, showMoreToggle, isFilterToggle, getId } from '../../actions'

import PostsItem from './posts-item'
import Spinner from '../spinner/Spinner'
import request from '../http/http'

import './posts.scss'

const PostsList = () => {
    const dispatch = useDispatch()
    const { posts, postLoadingStatus, users, isFilter, showMore, tempId, userLoadingStatus } = useSelector(
        (store) => store
    )

    useEffect(() => {
        dispatch(postsFetching())
        request('https://jsonplaceholder.typicode.com/posts')
            .then((data) => dispatch(postsFetched(data)))
            .catch(() => dispatch(postsFetchedError()))
        // eslint-disable-next-line
    }, [])

    const DoPostsWithDots = (elem) => {
        const temp = elem.map((item) => {
            if (item.body.length >= 150) {
                return {
                    ...item,
                    body: item.body.slice(0, 150) + '...',
                }
            }
            return item
        })
        return temp
    }

    if (postLoadingStatus === 'fetching') {
        return <Spinner />
    } else if (postLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const isDisplayFilter = isFilter ? { display: 'block' } : { display: 'none' }
    const isDisplayShowMore = isFilter ? { display: 'none' } : { display: 'block' }

    let visibleDataPosts = DoPostsWithDots(posts)
    if (isFilter) {
        visibleDataPosts = visibleDataPosts.filter((item) => item.userId === tempId)
    } else {
        visibleDataPosts = showMore ? visibleDataPosts : visibleDataPosts.filter((item) => item.id <= '8')
    }

    const postsList = visibleDataPosts.map((item) => {
        let namePersone = ''
        if (userLoadingStatus === 'error') {
            namePersone = 'Ошибка загрузки'
        }
        for (let elem of users) {
            if (item.userId === elem.id) {
                namePersone = elem.name
                break
            }
        }

        return (
            <PostsItem
                key={item.id}
                title={item.title}
                body={item.body}
                userName={namePersone}
                getId={() => dispatch(getId(item.id))}
                idPost={item.id}
            />
        )
    })

    return (
        <section className="posts">
            <div className="containerr">
                <div onClick={() => dispatch(isFilterToggle(false))} className="posts__filter" style={isDisplayFilter}>
                    Убрать фильтр
                </div>
                <div className="posts__wrapper">{postsList}</div>
                <div onClick={() => dispatch(showMoreToggle())} className="posts__more" style={isDisplayShowMore}>
                    Show more/less
                </div>
            </div>
        </section>
    )
}

export default PostsList
