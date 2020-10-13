import React from "react";
import { Link } from "react-router-dom";



const HomePage = () => (
  <Layout>
    <div>
      <img
        className="home-page-img"
        src="https://www.travelweekly.com/uploadedImages/All_TW_Art/2018/0108/T0101PATAGONIA1_C_AA.jpg?n=4554"
      />
      {/* <img
      className="home-page-img"
      src="https://thumbs-prod.si-cdn.com/t4UH6V0BQbLz3Rj1d0c8H0hUO10=/fit-in/1072x0/https://public-media.si-cdn.com/filer/d7/57/d757a1c8-2f57-4c4a-9567-6acf9364d24a/istock-578121210.jpg"
    /> */}
    </div>
  </Layout>
);

















export default HomePage






// const HomePage = ({curentUser, logoutUser}) => {
//       const sessionLinks = () => (
//         <nav className="login-signup">
//           <Link to="/login">Login</Link>
//           &nbsp;or&nbsp;
//           <Link to="/signup">Sign up!</Link>
//         </nav>
//       );
//       const personalGreeting = () => (
//         <hgroup className="header-group">
//           <h2 className="header-name">Hi, {currentUser.username}!</h2>
//           <button className="header-button" onClick={logout}>
//             Log Out
//           </button>
//         </hgroup>
//       );

//     return (
//         <div>
            
//         </div>
//     )
// }

// export default HomePage