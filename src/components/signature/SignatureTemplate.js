import React, { useState } from 'react'

const SignatureTemplate = (data) => {
  return (
		<div>
			<h1>SIGNATURE TEMPLATE</h1>
			<div className="signature-wrap">
				<div className="left-wrap">
					<h2>{data.data.fname}</h2>
					<div className="logo">Logo</div>
					<div className="socials">Socials</div>
				</div>
				<div className="right-wrap">
					<div className="details-wrap">
						<p>Email: {data.data.email}</p>
						<p>P: 1300 93 6564</p>
						<p>{data.data.mobile}</p>
						<a href="#">Perth Office</a>
						<a href="#">Melbourne Office</a>
						<a href="#">Sydney Office</a>
						<a href="http://www.okmg.com">www.okmg.com</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default SignatureTemplate
