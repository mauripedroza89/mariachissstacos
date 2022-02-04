import { Grid } from "@chakra-ui/react";
import FoodBox from './FoodBox';
import UsFood from '../../americanfood.json';


export default function UsFoodGrid(){
  return(
    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 5fr)"}} gap="5" >
      
      {UsFood.map((list, index) =>{
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
