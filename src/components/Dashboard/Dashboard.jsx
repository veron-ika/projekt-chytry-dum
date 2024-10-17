import './Dashboard.css'
import Lights from "../Lights/Lights"
import Climate from "../Climate/Climate"
import Blinds from '../Blinds/Blinds'
import Energy from '../Energy/Energy'

const Dashboard = ({data}) => (

    <main className="dashboard">
        <Lights lights={data.lights} />
        <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
        <Blinds state={data.blinds} />
        <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
    </main> 
)

export default Dashboard