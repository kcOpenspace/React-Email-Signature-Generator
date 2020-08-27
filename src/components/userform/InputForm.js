import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const InputForm = () => {
	const [data, setData] = useState([]);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => setData(values);

  return (
	  <div>
	    <h1>Email Signature Creation</h1>
	    <form onSubmit={handleSubmit(onSubmit)}>
	      <label>Fullname</label>
	      <input 
	        name="fname"
	        type="text"
	        ref={register({
	          required: "required"
	        })}
	      />
	      <p className="errorMsg">{errors.fname && errors.fname.message}</p>
						 
	      <label>Email</label>
	      <input 
					name="email"
					type="email"
	        ref={register({
	          required: "required",
	          pattern: {
	            value: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/i,
	            message: "Invalid email address"
	          }
	        })}
	      />
	      <p className="errorMsg">{errors.email && errors.email.message}</p>
	      <label>Contact No.</label>
	      <input 
					name="phone"
	        ref={register({
	          pattern: {
							value: "[0-9]",
	            message: "Invalid contact number"
	          }
	        })}
	      />
	      <p className="errorMsg">{errors.phone && errors.phone.message}</p>
						 
	      <button type="submit">Submit</button>
	    </form>
		</div>
  )
}

export default InputForm
