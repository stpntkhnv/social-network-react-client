import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {finishLoading, startLoading} from "../store/loading/actions";

const Home = (props: any) => {


    function res() {
        props.startLoading()
    }

    return (
        <div className="main-section" onClick={res}>
            sdfsdf
        </div>
    );
};

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading())
})

let mapStateToProps = (state: any) => ({
    state
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);