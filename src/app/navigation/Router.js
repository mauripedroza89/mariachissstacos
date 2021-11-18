import {Routes, Route} from 'react-router-dom';
import {Dashboard} from '../views'

const Router = () =>(
    <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
    </Routes>
)

export default Router