import {Routes, Route} from 'react-router-dom';
import {Dashboard,Drinks, Food, MexFood, UsFood} from '../views'

const Router = () =>(
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/menu/drinks" element={<Drinks/>}/>
        <Route exact path="/menu/food" element={<Food/>}/>
        <Route exact path="/menu/food/mexicanfood" element={<MexFood/>}/>
        <Route exact path="/menu/food/americanfood" element={<UsFood/>}/>
    </Routes>
)

export default Router