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
            <h1 onClick={async () => {
                fetch(`https://localhost:5001/api/users/login?userName=${props.auth.authUser.profile.name}`)
                    .then(data => {
                        alert(data.json())
                    })

            }}>ertherh</h1>
        </div>
    );
};

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading()),
    getAllUsersProfiles: () => dispatch(getAllUsersProfilesThunk())
})

let mapStateToProps = (state: any) => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);