import { Grid } from "@chakra-ui/react";
import FoodBox from './FoodBox';
import MexFood from '../../mexicanfood.json';


export default function MexFoodGrid(){
  return(
    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 5fr)"}} gap="5" >
      
      {MexFood.map((list, index) =>{
        return <div>
          <FoodBox
            key={index}
            name={list.name}
            price={list.price}
            image={list.image}
            description={list.description}
          />
        </div>
      })}

    
  </Grid>

)

}
