const catRequested = () => {
    return {
        type: 'CAT_REQUESTED'
    }
}

const catError = () => {
    return {
        type: 'CAT_ERROR'
    }
}

const catLoaded = (singleCat) => {
    return {
        type: 'CAT_LOADED',
        payload: singleCat
    }
}

export {
    catRequested,
    catError,
    catLoaded
}