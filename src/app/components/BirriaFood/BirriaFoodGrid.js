import { Grid } from "@chakra-ui/react";
import FoodBox from './FoodBox';
import BirriaFood from '../../birriafood.json';


export default function BirriaFoodGrid(){
  return(
    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 5fr)"}} gap="5" >
      
      {BirriaFood.map((list, index) =>{
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
