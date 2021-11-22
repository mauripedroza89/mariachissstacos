import {Routes, Route} from 'react-router-dom';
import {Dashboard,Drinks} from '../views'

const Router = () =>(
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/menu/drinks" element={<Drinks/>}/>
    </Routes>
)

export default Router