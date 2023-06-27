import './assets/css/style.css';
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useRef, useState } from 'react';
import { floatedLabel, onSubmitBooking } from './Service';



function App() {
   const formRef= useRef<any>(null), 
	[loader, setLoader] = useState(false),
	[randomUUID, setRandomUUID] = useState('');

	
   useEffect(() => floatedLabel(formRef),[]);

  return ( <div id="booking" className="section">
			<QRCodeCanvas value={randomUUID} size={300} bgColor={"#00ff00"} level={"H"} className="CodeCanvas"/>
		
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="booking-cta">
							<h1>Reserve a seat </h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
						</div>
					</div>

               <div className="col-md-6 col-md-offset-1">
						<div className="booking-form">
							<form ref={formRef} onSubmit={onSubmitBooking.bind(this,  {setLoader, setRandomUUID })}>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<input className="form-control" type="text" required name="fullname"/>
											<span className="form-label">Fullname</span>
										</div>
									</div>
                        </div>

                        <div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input className="form-control" type="tel" required name="phone"/>
											<span className="form-label">Phone</span>
										</div>
									</div>

                           <div className="col-md-6">
										<div className="form-group">
											<input className="form-control" type="date" required name="DOB"/>
											<span className="form-label">Date of birth</span>
										</div>
									</div>
                        </div>
                        <div className="row">
									<div className="col-md-8">
										<div className="form-group">
											<input className="form-control" type="email" required name="email"/>
											<span className="form-label">Email address</span>
										</div>
									</div>

                           <div className="col-md-4 col-sm-6">
										<div className="form-group">
											<span className="form-label">Gender</span>
											<select className="form-control" required name="gender">
												<option>Male</option>
												<option>Female</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
                        </div>

                        <div className="form-btn">
									<button className="submit-btn" type="submit" disabled={loader}>
									{!loader? 'Book Now': "Processing...." }</button>
								</div>

                     </form>
                   </div>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default App
