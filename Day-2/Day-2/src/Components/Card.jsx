import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


function Card(props){
    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card">
                <div className="card-header text-center">
                    <span className="fw-bold opacity-50 text-uppercase">{props.name.planType}</span>
                    <h2 className='h2 my-2'>${props.name.planRate}/month</h2>
                </div>
                <div className="card-body">
                    {
                        props.name.features.map((ele, index)=>{
                            return <p key={index} className={`card-text ${ele.enabled ? '' : 'opacity-25'}`}>
                                <FontAwesomeIcon icon={ele.enabled ? faCheck : faTimes} />
                                {/* <i className={`fas ${ele.enabled ? 'fa-check' : 'fa-times text-danger'}`}></i> */}
                                {ele.name}
                            </p>
                        })
                    }
                    
                    <div className="d-flex justify-content-center">
                        <a href="#" className={`w-100 btn btn-primary text-uppercase fw-bold py-3 
                        ${
                            props.name.planType !== 'Pro'
                            ? props.name.planType === 'Plus' ? 'opacity-75' : 'opacity-50'
                            : ''
                        }`
                        }>Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

{/* <p className="card-text"><i className={`${props.name.icon[0]}`}></i> Single User</p>
<p className="card-text"><i className={`${props.name.icon[1]}`}></i> 50GB Storage</p>
<p className="card-text"><i className={`${props.name.icon[2]}`}></i> Unlimited Public Projects</p>
<p className="card-text"><i className={`${props.name.icon[3]}`}></i> Community Access</p>
<p className="card-text"><i className={`${props.name.icon[4]}`}></i> Unlimited Private Projects</p>
<p className="card-text"><i className={`${props.name.icon[5]}`}></i> Dedicated Phone Support</p>
<p className="card-text"><i className={`${props.name.icon[6]}`}></i> Free Sub-domain</p>
<p className="card-text"><i className={`${props.name.icon[7]}`}></i> Monthly Status Reports</p>

{props.name.icon.map((iconClass, index) => (
                    <p key={index} className={`card-text ${iconClass.includes('fa-xmark') ? 'opacity-25' : ''}`}>
                    <i className={`${iconClass}`}></i> {index === 7 ? 'Monthly Status Reports' : pContent[index]}
                    </p>
                ))}

*/}