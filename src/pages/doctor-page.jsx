<<<<<<< HEAD
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import someImg from '../assets/img/health-section-doctor.png';
export function DoctorPage() {
=======
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { Switch, Route } from 'react-router';
import { History } from '../cmps/doctor/history';
import { Meetings } from '../cmps/doctor/meetings';
import { Patients } from '../cmps/doctor/patients';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser, onLogout } from '../store/actions/user.actions';

const nestedRoutes = [
    {
        path: '/doctor-page/meetings',
        component: Meetings,
    },
    {
        path: '/doctor-page/patiences',
        component: Patients,
    },
    {
        path: '/doctor-page/history',
        component: History,
    },
];

export function DoctorPage() {
    const { user } = useSelector((state) => state.userModule);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) dispatch(getLoggedInUser());
    }, [user]);

    const onLogOut = () => {
        window.location.href = '/';
        dispatch(onLogout());
    };

>>>>>>> a85f4b83e8699cb4a2067777077a350834b103e2
    return (
        <div className="main-wrapper">
            <div className="main-contents">
                <div className="profile-section">
<<<<<<< HEAD
                    <div className="img-wrapper">
                        <img src={someImg} alt="" />
                    </div>

                    <div className="name-section">
                        <div className="details">
                            <p className="title">Name</p>
                        </div>
                        <div className="details">
                            <p>Job</p>
=======
                    <div className="main-profile-container">
                        <div className="img-wrapper">
                            <img
                                src="https://randomuser.me/api/portraits/women/39.jpg"
                                alt=""
                            />
                        </div>

                        <div className="name-section">
                            <div>
                                <div className="details">
                                    <p className="title">Orly Amadi</p>
                                </div>
                                <div className="details">
                                    <p className="sub-title">Doctor</p>
                                </div>
                            </div>
                            <div className="logout-btn">
                                <button onClick={onLogOut}>logout</button>
                            </div>
>>>>>>> a85f4b83e8699cb4a2067777077a350834b103e2
                        </div>
                    </div>

                    <div className="details-wrapper">
                        <div className="details">
<<<<<<< HEAD
                            <span>icon</span>
                            <p>Name</p>
                        </div>
                        <div className="details">
                            <span>icon</span>
                            <p>Name</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main-content-section">
                        <div className="main-content">
                            <div className="contents">
                                <div className="content">
                                    <div>date</div>
                                    <div>time</div>
                                    <div>name</div>
                                </div>
                                <div className="btns-wrapper">
                                    <button className="main-btn">V</button>
                                    <button className="main-btn red">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="others-section">
                        <div className="first-other"></div>
                        <div className="sec-other"></div>
                    </div>
=======
                            <NavLink to="/doctor-page/meetings">
                                Meetings
                            </NavLink>
                        </div>
                        <div className="details">
                            <NavLink to="/doctor-page/patiences">
                                Patiences
                            </NavLink>
                        </div>
                        <div className="details">
                            <NavLink to="/doctor-page/history">History</NavLink>
                        </div>
                    </div>
                </div>
                <div className="main-content-section">
                    <div className="main-content">
                        <div className="contents">
                            <Switch>
                                {nestedRoutes.map((nestedRoute) => (
                                    <Route
                                        key={nestedRoute.path}
                                        exact
                                        component={nestedRoute.component}
                                        path={nestedRoute.path}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </div>
>>>>>>> a85f4b83e8699cb4a2067777077a350834b103e2
                </div>
            </div>
        </div>
    );
}
