import './Light.css'
import { useState } from 'react'
import lightOff from './images/light-off.svg'
import lightOn from './images/light-on.svg'

const Light = ({ name, state }) => {

    const [light, setLight] = useState(state)

    return (
        <div 
            className="light"
            onClick={() => setLight(light === 'on' ? 'off' : 'on') } >
			    <div className="light__icon">
                    {
                        light === 'on'
                        ? <img src={lightOn} alt='Light on' />
                        : <img src={lightOff} alt='Light off' />
                    }
			    </div>
			    <div className="light__name">{name}</div>
		</div>
    )
}

export default Light