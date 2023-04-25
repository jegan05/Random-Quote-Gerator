import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

	state = { advice: '' };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios.get('https://api.adviceslip.com/advice')
		.then((response) => {
			const { advice } = response.data.slip;

			this.setState({ advice });
		})

		.catch ((error) => {
			console.log(error);
		})
	}

	render() {
		const {advice} = this.state;

		return(
			<div className="app">
			<h1  id="head">Random Quote Generator</h1> 
				<div className="card">
                    <h1 className="heading">
					{this.state.advice}
					</h1>
					<button className="button" onClick=
					{this.fetchAdvice}>
						<span>Give Me Advice</span>
					</button>
					<a href='https://mail.google.com/' target='_blank'><img id='gmail' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADc3NzX19clJSWjo6OgoKDp6emqqqrt7e329vb8/Pzw8PC5ubnk5OSAgICNjY2YmJhpaWmxsbHPz8/Dw8MmJiYMDAwdHR1BQUE1NTU7OztkZGRYWFhOTk52dnYYGBiHh4ctLS1xcXFKSkp7e3vIyMhUVFT3yzh8AAAEwElEQVR4nO2d2XbiMBBEJRNWg7MnBLKR9f//cGYymQGCbZVakltA3WcO9D2EIFVLtDGEEEIIIYQQQgghhBBCCCGEEEIIIflQ9maj/iBH+qNZrwzVGw+WNm+Wg3GAX3WvXT/EfSUVPNUuHeZU5Dd81q7bg/nQX7CnXbQnvUMX9FacatcrYOpluNAuV8DCR/Bcu1oRA1xwol2rkAlseKZdqpAz2FC7UjGo4LV2oWKuQcN37ULFvIOGN9qFirkBDbXrDAATHGqXGQC2AC+0ywyggAxbF91FVehStb4B2PK71fDWe5cSmd5tYkOfhUMKHMutKIZ2IdhPR2Lo2vPEMbR2lFikiZGzsliG9iE4phRQPrgLi2Zo7UdinV0+kLIiGgoDPDlYtBnT0J6Ic1gB1QlWVFRDa/uJtdb00ZIiG9pHPDYIYfIIVxTbEN9yhuCzIY9vaJ8S6xnz5FNOAkP7jC3npRR+3ZMUhtaeJxT0DW7TGNo7vzwdZ3rnW0oiQ2tnSQRn/oUkM7QXCQQvBHWkMxT07xSrELYO4+6MhY2FpIZ2GXIoYpux9ARIWkNrLyMJXoorSG1o72PsjMuAMy7JDa29Cha8Cnn5DgztKlBwFfTqXRjal5AobvgS9uKdGIZEce4wLQ9DaRSHhGnJDdG9jCSKg8I0Rw3hhi8l+F2MdmPXgJ3nZdn2UQ03PIG3bJ5RHBqm/d6Mtj0yiqGj+7PGJ4obYE/51flKb2jMK1YPHMWhYdrr16O7MITjLyyK83y2TgzN5A0r6hV4PfAv4u3fX0Q3hvAnxxnFoWHa+lheV4ammmOltUdx4H/m+cZ/5s4M4W+wligODdO2vl07NIRXIU1RHBqmba+QujQ0k0+sxPooDgzTPn986XRqiPe9dl8aXeDvLBw6NjQVeM7vZxQHhmk3u4u/rg3hqzWLzShuDB6Vr+uld28IJyvrKA4N02pTHwVDeOv6HcWhYVrDRlrD0O9N8X/LczCEP1grs8IeuGhM0JUMY19haOmCqBlGvQzWVqmeoazjV0d7N1LTUNK1rcHRUVY1FHTed3CeCtA1DL/25j7ZoW1oCjCKq+UWOJ2jbggHLzUgsU4OhuKrYVg0l4MhHMVt8QbGq1kYwlHcBvAd10wM4Sjumzne5sjF0O8ao0+rKh9DOIrzbDdmZGhKLIr79GsZ52SINeZ92/55GboPV/gf3cjM0HVARnD8JjvD1lxGcoQqP8PmbE12DC5Dw6YoTniUMUvDuiiuOUxzkKfhbhQnP1Kcq+GPpw04Fp6t4WYUF3S0P2PD/1Fc2PWMnA3/RnGhV2yyNvwTxQVfk8rc0IRfyszdMBwauqGhNjR0Q0NtaOiGhtrQ0A0NtaGhGxpqQ0M3NNSGhm5oqA0N3dBQGxq6oaE2NHRDQ21o6IaG2tDQTZshOuYkJW2XxyO8h9rjLYqi9deIMMPDn1Fy+HNmDn9W0BHMe9rfmV3owIbDn7u2vx9EVPAI5h8e/gxLwf3IHPCYQ3oEs2SPYB7wHi5Oveds7NvYasEFjqHfVWVdJLPVDfwjXhkg/hHxKtYPzqTlImS21nQQ/nMsabkbBM+AKXuzUT9PRrOexhA/QgghhBBCCCGEEEIIIYQQQgghhJAmfgHkNGVmyngLWAAAAABJRU5ErkJggg=='/></a>
				</div>
        <h4 id='name' >by JEGAN D</h4>
			</div>
		)
	}
}

export default App;
