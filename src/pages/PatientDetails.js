import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import avatar from "../assets/avatar.png"

const PatientDetails = (props) => {
    const patients = useSelector((state)=>state.users.value);
    let {patientId} = useParams()
    console.log(patientId)
        
    return (
        <div className='container-fluid'>
            {/* This is patient details page */}
            <div className='row mt-2' style={{height:"90vh"}}>
                <div className='col-md-3 col-12'>
                    {
                        patients.filter(patient => {
                            if (patient.id == patientId) {
                            return patient;
                            }
                        }).map((patient) => (
                            <Card border="light" className="my-2 text-center" key={patient.id}>
                                <Card.Header>
                                <div className='avatar rounded-circle'>
                                    <img alt="image" src={avatar} style={{objectFit:"contain", width:"25%"}}/>
                                </div>
                                <div className=''>
                                    <Card.Title>{patient.first_name} {patient.last_name}</Card.Title>
                                    <Card.Text>Patient ID: {patient.id}</Card.Text>
                                    <button className='btn btn-secondary'>Message Patient</button>
                                </div>
                                </Card.Header>
                                <div className='my-2'>
                                <div style={{backgroundColor:"#d8d8d9"}} className="p-2 text-center">
                                <i>Patient Details</i>
                                <Card.Text>
                                    mail: {patient.email} <br/>
                                    gender: {patient.gender}
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                        ))
                    }
                </div>
                <div className='progress-details col-md-9 col-12'>
                    <div className='row h-50 border-light my-2 p-2 rounded' style={{backgroundColor:"#f7f7f7"}}>
                        progress
                    </div>
                    <div className='row h-50 border-light my-2 p-2 rounded' style={{backgroundColor:"#f7f7f7"}}>
                        personalised content
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PatientDetails;