import React from 'react'
import InputForm from '../userform/InputForm'

const SignatureTemplate = () => {
  return (
    <div>
			<h1>SIGNATURE TEMPLATE</h1>
			<div className="signature-wrap">
				<div className="left-wrap">
					<h2>Matthew Bowyer</h2>
					<div className="logo">Logo</div>
					<div className="socials">Socials</div>
				</div>
				<div className="right-wrap">
					<div className="details-wrap">
						<p>P: 1300 93 6564</p>
						<p>M: 0430 17 3838</p>
						<a>Perth Office</a>
						<a>Melbourne Office</a>
						<a>Sydney Office</a>
						<a href="http://www.okmg.com">www.okmg.com</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default SignatureTemplate
