import React from 'react';
import {applicationState} from "../store/States";
import {connect} from "react-redux";

//TODO refactor all props fot types
function Profile(props: any) {

    function testProfile() {
        let code = document.getElementById("code");
        if(code != undefined)
        {
            code.innerText = props.auth.IdentityUserProfile;
        }

        console.log(props)
    }

    return (
        <div>
            <h1>Hello profile</h1>
            <button onClick={testProfile} className="mt-5 btn btn-outline-success p-5">
                GetProfile
            </button>
            <pre id="code">
                tuta
            </pre>
        </div>
    );
}

function mapStateToProps(state: applicationState) : applicationState {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Profile);