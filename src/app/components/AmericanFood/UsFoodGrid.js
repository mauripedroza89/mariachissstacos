import { SimpleGrid } from "@chakra-ui/react";
import FoodBox from './FoodBox';
import UsFood from '../../americanfood.json';


export default function UsFoodGrid(){
  return(
    <SimpleGrid columns={[2, null, 5]} spacing="40px">
      
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

    
  </SimpleGrid>

)

}
