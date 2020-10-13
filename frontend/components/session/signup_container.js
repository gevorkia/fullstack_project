import {connect} from "react-redux";
import { createNewUser } from "../../actions/session_actions";
import Signup from "./signup"


// don't need to map state for signup

const mDTP = (dispatch) => {
    return {
        createNewUser: formUser => dispatch(createNewUser(formUser))
    }
}

export default connect(null, mDTP)(Signup)