import React, {useEffect, useCallback} from 'react';
import styled from 'styled-components';
import CatService from '../../services/catService';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
//redux
import { connect } from 'react-redux';
import { catLoaded, catError, catRequested } from '../../redux/actions';

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const ImgPage = ({isEnabled, isRandom, changeCat, catLoaded, catError, catRequested, loading, error, cat}) => {

    const callBackReqHandler = useCallback((service) => {
        catRequested();
        service.getResourse()
        .then((res) => {
            catLoaded(res);
        })
        .catch(() => {
            catError();
        })
    },[catError, catLoaded, catRequested])

    useEffect(() => {
        const CS = new CatService();
        callBackReqHandler(CS);
    },[isEnabled, isRandom, changeCat, callBackReqHandler])

    useEffect(() => {
        let Interval = null;
        const CS = new CatService();
        if (isRandom && isEnabled) {
            Interval = setInterval(() => {
                callBackReqHandler(CS);
            },5000);
        }
        return () => {
            clearInterval(Interval);
        }
    },[isRandom, isEnabled, changeCat, callBackReqHandler])

    if (error) {
        return <Error/>
    }

    if (loading && !error) {
        return <Loading/>
    }

    return (
        <Image src={cat[0].url} alt="cat image"/>
    )
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        cat: state.cat
    }
}
const mapDispatchToProps = {
    catLoaded,
    catError,
    catRequested
}
export default connect(mapStateToProps,mapDispatchToProps)(ImgPage);