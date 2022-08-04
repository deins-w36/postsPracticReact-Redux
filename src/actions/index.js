export const postsFetching = () => {
    return {
        type: 'POSTS_FETCHING',
    }
}

export const postsFetched = (posts) => {
    return {
        type: 'POSTS_FETCHED',
        payload: posts,
    }
}
export const postsFetchedError = () => {
    return {
        type: 'POSTS_FETCHED_ERROR',
    }
}

export const usersFetching = () => {
    return {
        type: 'USERS_FETCHING',
    }
}

export const usersFetched = (users) => {
    return {
        type: 'USERS_FETCHED',
        payload: users,
    }
}
export const usersFetchedError = () => {
    return {
        type: 'USERS_FETCHED_ERROR',
    }
}
export const showMoreToggle = () => {
    return {
        type: 'SHOW_MORE_TOGGLE',
    }
}
export const isFilterToggle = (filter) => {
    return {
        type: 'IS_FILTER_TOGGLE',
        payload: filter,
    }
}
export const getId = (id) => {
    return {
        type: 'GET_ID',
        payload: id,
    }
}
