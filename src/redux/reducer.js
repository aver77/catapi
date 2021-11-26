const initialState = {
    loading: true,
    error: false,
    cat: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CAT_REQUESTED':
            return {
                ...state,
                loading: true
            }

        case 'CAT_LOADED':
            return {
                ...state,
                cat: action.payload,
                loading: false
            }

        case 'CAT_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}

export default reducer;