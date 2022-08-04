const initialState = {
    posts: [],
    postLoadingStatus: 'idle',
    users: [],
    userLoadingStatus: 'idle',
    showMore: false,
    isFilter: false,
    tempId: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS_FETCHING':
            return {
                ...state,
                postLoadingStatus: 'fetching',
            }
        case 'POSTS_FETCHED':
            return {
                ...state,
                postLoadingStatus: 'fetched',
                posts: action.payload,
            }
        case 'POSTS_FETCHED_ERROR':
            return {
                ...state,
                postLoadingStatus: 'error',
            }

        //

        case 'USERS_FETCHING':
            return {
                ...state,
                userLoadingStatus: 'fetching',
            }
        case 'USERS_FETCHED':
            return {
                ...state,
                userLoadingStatus: 'fetched',
                users: action.payload,
            }
        case 'USERS_FETCHED_ERROR':
            return {
                ...state,
                userLoadingStatus: 'error',
            }
        //
        case 'SHOW_MORE_TOGGLE':
            return {
                ...state,
                showMore: !state.showMore,
            }
        case 'IS_FILTER_TOGGLE':
            return {
                ...state,
                isFilter: action.payload,
            }
        case 'GET_ID':
            return {
                ...state,
                tempId: action.payload,
            }

        default:
            return state
    }
}

export default reducer
