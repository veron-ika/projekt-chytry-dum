import Light from "../Light/Light"
import './Lights.css'

const Lights = ({ lights}) => (

    <div className="lights">
        {lights.map(light => <Light key={light.name} state={light.state} name={light.name} />)}
    </div>
)

export default Lights