import { Grid } from "@chakra-ui/react";
import DrinkBox from './DrinkBox';
import Drinks from '../../drinks.json';


export default function DrinkGrid(){
  return(
    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 5fr)"}} gap="5" >
      
      {Drinks.map((list, index) =>{
        return <div>
          <DrinkBox
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
