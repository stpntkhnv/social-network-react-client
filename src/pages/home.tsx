import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {finishLoading, startLoading} from "../store/loading/actions";
import {getAllUsersProfilesThunk} from "../store/peoples/actions";

const Home = (props: any) => {


    function res() {

    }

    const testThunk = () => {
        props.getAllUsersProfiles()
    };

    return (
        <div className="main-section" onClick={res}>
            sdfsdf
            <button onClick={testThunk}>test thunk</button>
        </div>
    );
};

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading()),
    getAllUsersProfiles: () => dispatch(getAllUsersProfilesThunk())
})

let mapStateToProps = (state: any) => ({
    state
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);