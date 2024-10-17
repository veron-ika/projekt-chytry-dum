import { useState } from 'react'
import blindsClosed from './images/blinds-closed.svg'
import blindsOpen from './images/blinds-open.svg'
import './Blinds.css'

const Blinds = ({ state }) => {

    const [blind, setBlind] = useState(state)
  
    return (
      <div className="blinds">
	      <div className="blinds__icon">
            {blind === 'open' ?
            <img src={blindsOpen} alt='Blinds open' />
            :
            <img src={blindsClosed} alt='Blinds closed' /> }
		</div>
		<div className="blinds__name">
			Žaluzie
		</div>
		<div className="blinds__controls">
            <button
            onClick={() => setBlind('open')}
            className={`button ${blind === 'open' && 'button--active'}`}>Otevřeno</button>
            <button
            onClick={() => setBlind('closed')}
            className={`button ${blind === 'closed' && 'button--active'}`}>Zavřeno</button>
            </div>
	</div>
   )
}

export default Blinds