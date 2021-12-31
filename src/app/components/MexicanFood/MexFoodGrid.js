import { SimpleGrid } from "@chakra-ui/react";
import FoodBox from './FoodBox';
import MexFood from '../../mexicanfood.json';


export default function MexFoodGrid(){
  return(
    <SimpleGrid columns={[2, null, 5]} spacing="40px">
      
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

    
  </SimpleGrid>

)

}
