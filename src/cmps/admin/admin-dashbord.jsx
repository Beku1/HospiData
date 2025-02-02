import { CardList } from "./card-list";
import { LineChart } from "./line-chart";
import { PieChart } from "./pie-chart";
import {adminService} from "../../services/admin.service"
import { useEffect, useState } from "react";


export function AdminDashBord() {

        const [doctors,setDoctors] = useState(null)
        const [patience,setPatience] = useState(null)
        const [appointments,setAppointments] = useState(null)
        const [activeCmp,setActiveCmp] = useState('line')
        const [history,setHistory] = useState([])

        useEffect(async() => {
           await getDoctorsData();
           await getPatience();
        //    getAppointments()
         }, []);

        const getDoctorsData = async () =>{
            const doctors = await adminService.getDoctors();
            setDoctors(prevDoctors => prevDoctors = doctors)
            const appointments =  doctors.reduce((acc,doctor)=>{
                return acc = acc  + doctor.meetings.length
              },0)
              setAppointments(prevAppointments => prevAppointments = appointments)
        }
        const getPatience = async () =>{
            const patience = await adminService.getPatience();
            setPatience(prevPatience => prevPatience = patience)
        }

        // const getAppointments= async () =>{
        //      const doctors = await adminService.getDoctors();
        // }


        const showCpm = () => {

            switch (activeCmp) {
                case 'line':
                    return <LineChart/>
                case 'pie' : 
                return <PieChart/>
            }

        }

        const selectCmp = (cmpName) => {
            setActiveCmp(prev=> prev = cmpName)
        }



     if (!doctors || !patience || !appointments) return <div>lodinng...</div>
     
    // <div className="dashBord-continer"> 

    // return <> <div className="main-content">
    //      <CardList doctorsSum={doctors.length} patienceSum={patience.length}/>
    //     {/* <div className="dashbord-analitics-continer">
    //      */}
    //      </div>
    //       <div className="others-section">
    //       <div className="first-other">
    //      <LineChart/>
    //       </div>
    //       <div className="sec-other">
    //      <PieChart/>
    //       </div>
    //      {/* <div className="admin-spce"></div> */}
    //     </div>
    // {/* </div>; */}
    // </>
    return  <>
    <div className="main-content-header">DashBord</div>
    <div className="dasbord">
         <CardList doctorsSum={doctors.length} patienceSum={patience.length} appointments={appointments}/>
         <div className="flex dasbord-btn-continer ">
             <button className={activeCmp === 'line' ? 'activeChart' : '' } onClick={()=>selectCmp('line')}>Financial Data</button>
             <button className={activeCmp === 'pie' ? 'activeChart' : '' } onClick={()=>selectCmp('pie')}>Doctors status</button>
         </div>
         {showCpm()}
        </div>     
        </>    
}
