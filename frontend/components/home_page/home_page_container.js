// import { connect } from "react-redux";
// import { logout } from "../actions/session_actions";
// import HomePage from "./home_page"

// // const mSTP = (state) => {
// //   return {
// //     currentUser: state.entities.users[state.session.id],
// //   };
// // };

// const mSTP = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id],
//   };
// };

// const mDTP = (dispatch) => {
//     return {
//         logoutUser: () => dispatch(logoutUser())
//     }
// }

// export default connect(mSTP, mDTP)(HomePage)