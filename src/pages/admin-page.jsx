
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Route, Switch } from "react-router-dom"
import {AdminDashBord} from "../cmps/admin/admin-dashbord"
import {AdminDoctorsList} from "../cmps/admin/admin-doctors-list"
import { AdminMainContect } from "../cmps/admin/admin-main-contect"
import {AdminPatienceList} from "../cmps/admin/admin-patience-list"
import { AdminProfile } from "../cmps/admin/admin-proflie"
import { AdminSideNavBar } from "../cmps/admin/admin-side-nav"
import { getLoggedInUser, onLogout } from "../store/actions/user.actions"


const adminNavLinks = [

    { 
        path: '/admin/DashBord',
        component: AdminDashBord,
        label: 'DashBord',
    },
    { 
        path: '/admin/doctors',
        component: AdminDoctorsList,
        label: 'Doctors',
    },
    { 
        path: '/admin/patience',
        component: AdminPatienceList,
        label: 'Patience',
    },

]


const nestedRoutes = [
    {
        path: '/doctor-page/meetings',
        component: AdminDashBord,
    },
    {
        path: '/doctor-page/patiences',
        component: AdminDoctorsList,
    },
    {
        path: '/doctor-page/history',
        component: AdminPatienceList,
    },
];

export function AdminPage() {

    const { user } = useSelector((state) => state.userModule);

const dispatch = useDispatch();

useEffect(() => {
    if (!user) dispatch(getLoggedInUser());
}, [user]);

const onLogOut = () => {
    window.location.href = '/';
    dispatch(onLogout());
};

    // return <section className="main-container ">
    //     <div className="flex" >
    //      <div className="admin-side flex column align-center">
    //          <AdminProfile admin={_ADMIN}/>
    //          <AdminSideNavBar routes={adminNavLinks} />
    //      </div>
    //      <AdminMainContect routes={adminNavLinks}/>
    //      </div>
    // </section>

    // return <div className="main-wrapper">
    //         <div className="main-contents">
    //             <div className="profile-section">
    //                 <div className="img-wrapper">
    //                     <img src={_ADMIN.imgUrl} alt="" />
    //                 </div>

    //                 <div className="name-section">
    //                     <div className="details">
    //                         <p className="title">{_ADMIN.fullname}</p>
    //                     </div>
    //                     <div className="details">
    //                         <p>Admin</p>
    //                     </div>
    //                 </div>

    //                 <div className="details-wrapper">
    //                     {/* <div className="details">
    //                         <span>icon</span>
    //                         <p>Name</p>
    //                     </div>
    //                     <div className="details">
    //                         <span>icon</span>
    //                         <p>Name</p>
    //                     </div> */}
    //                      <AdminSideNavBar routes={adminNavLinks} />
    //                 </div>
    //             </div>
    //             <div>
                   
                       
    //                     <AdminMainContect routes={adminNavLinks}/>
                  
    //             </div> 
    //             </div>
    //             </div>   



//     return  <div className="main-wrapper">
//     <div className="main-contents">
//         <div className="profile-section">
//             <div className="main-profile-container">
//                 <div className="img-wrapper">
//                     <img
//                         src="https://randomuser.me/api/portraits/women/39.jpg"
//                         alt=""
//                     />
//                 </div>

//                 <div className="name-section">
//                     <div>
//                         <div className="details">
//                             <p className="title">Orly Amadi</p>
//                         </div>
//                         <div className="details">
//                             <p className="sub-title">Doctor</p>
//                         </div>
//                     </div>
//                     <div className="logout-btn">
//                         <button>logout</button>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className="details-wrapper"> */}

//             <AdminSideNavBar routes={adminNavLinks} />
//                 {/* <div className="details">
//                     <NavLink to="/doctor-page/meetings">
//                         Meetings
//                     </NavLink>
//                 </div>
//                 <div className="details">
//                     <NavLink to="/doctor-page/patiences">
//                         Patiences
//                     </NavLink>
//                 </div>
//                 <div className="details">
//                     <NavLink to="/doctor-page/history">History</NavLink>
//                 </div> */}
//             {/* </div> */}
//             <div className="main-content-section">
//                     <div className="main-content">
//                         <div className="contents">
//                         {/* <AdminMainContect routes={adminNavLinks}/> */}
//                         </div>
//                     </div>
//                 </div>
//         </div>
//      </div>
//  </div>        <div className="main-wrapper">
if(!user) return <div>loding...</div>
return   <div className="main-wrapper">
            <div className="main-contents">
                <div className="profile-section">
                    <div className="main-profile-container">
                        <div className="img-wrapper">
                            <img
                                src={user.imgUrl}
                                alt=""
                            />
                        </div>

                        <div className="name-section">
                            <div>
                                <div className="details">
                                    <p className="title">{user.fullname}</p>
                                </div>
                                <div className="details">
                                    <p className="sub-title">Admin</p>
                                </div>
                            </div>
                            <div className="logout-btn">
                                <button onClick={onLogOut}>logout</button>
                            </div>
                        </div>
                    </div>

               <AdminSideNavBar routes={adminNavLinks}/>
                </div>
                <div className="main-content-section">
                    <div className="main-content">
                            <AdminMainContect routes={adminNavLinks}/>
                    </div>
                </div>
            </div>
        </div>





}
                    // {/* <div className="others-section">
                    //     <div className="first-other"></div>
                    //     <div className="sec-other"></div>  */}
                         
                    // {/* </div>
                // div>
//             </div>
//         </div>
//     </div>
// }
                    
