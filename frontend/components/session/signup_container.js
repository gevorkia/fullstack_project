import {connect} from "react-redux";
import { createNewUser } from "../../actions/session_actions";
import Signup from "./signup"



const mSTP = state => {
    return {
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        createNewUser: formUser => dispatch(createNewUser(formUser))
        
    }
}

export default connect(mSTP, mDTP)(Signup)