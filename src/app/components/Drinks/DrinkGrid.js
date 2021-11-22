import { SimpleGrid } from "@chakra-ui/react";
import DrinkBox from './DrinkBox';
import Drinks from '../../drinks.json';


export default function DrinkGrid(){
  return(
    <SimpleGrid columns={[2, null, 5]} spacing="40px">
      
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

    
  </SimpleGrid>

)

}
