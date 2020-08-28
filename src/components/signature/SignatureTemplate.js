import React from 'react'

const SignatureTemplate = (data) => {

  return (
		/* IMPORT STATE FROM FORM DATA */
		/* TODO IMPLEMENT A SIGNATUE MODAL FOR SIGNING */
		<div className="signature-container">
			<h1>SIGNATURE TEMPLATE</h1>
			<div className="signature-wrap">
				<div className="left-wrap">
					<h2>{(!data.data.fname)?("Your Name"):(data.data.fname)}</h2>
					<p className="job-title">{(!data.data.position)?("position"):(data.data.position)}</p>
					<div className="logo">OKMG.</div>
					<div className="socials">
						<i class="fa fa-facebook fa-2x"></i>
						<i class="fa fa-linkedin fa-2x"></i>
					</div>
				</div>
				<div className="right-wrap">
					<div className="details-wrap">
						<p className="inline-text"><div>Email:</div>{data.data.email}</p>
						<p className="inline-text"><div>Mob:</div>{data.data.mobile}</p>
						<p><a href="#">Perth Office</a></p>
						<p><a href="#">Melbourne Office</a></p>
						<p><a href="#">Sydney Office</a></p>
						<p><a href="http://www.okmg.com">www.okmg.com</a></p>
					</div>
				</div>
			</div>
    </div>
  )
}

export default SignatureTemplate
