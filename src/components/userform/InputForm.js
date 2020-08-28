import React, { useState } from 'react'
import SignatureTemplate from '../signature/SignatureTemplate'

const InputForm = () => {
	const [data, setData] = useState([]);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value.trim()
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
	};

  return (
	  <div>
	    <h1>Email Signature Creation</h1>
	    <form onSubmit={handleSubmit} className="form-wrap">
	      <label>Fullname</label>
	      <input 
	        name="fname"
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
						 
	      <button type="submit">Submit</button>
	    </form>

			<div><SignatureTemplate data={data}/></div>
			
		</div>
  )
}

export default InputForm
