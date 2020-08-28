import React, { useState } from 'react'
import SignatureTemplate from '../signature/SignatureTemplate'

const InputForm = () => {
	const [data, setData] = useState([]);

	//Handle onChange. Input is directly updateing the state
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value.trim()
		});
	};

	//form submit actions here
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
	};

  return (
		// TODO: FORM VALIDATION
	  <div>
	    <h1>Email Signature Creation</h1>
	    <form onSubmit={handleSubmit} className="form-wrap">
	      <label>Fullname</label>
	      <input 
	        name="fname"
					type="text"
					onChange={handleChange}
	      />

	      <label>Position Title</label>
	      <input 
	        name="position"
					type="text"
					onChange={handleChange}
	      />
						 
	      <label>Email</label>
	      <input 
					name="email"
					type="email"
					onChange={handleChange}
	      />

	      <label>Contact Mobile No.</label>
	      <input 
					name="mobile"
					onChange={handleChange}
	      />
	    </form>

			{/* Parse Data state into Signature Template */}
			<SignatureTemplate data={data}/>
			
		</div>
  )
}

export default InputForm
