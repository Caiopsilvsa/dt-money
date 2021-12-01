import { Container } from "./styles";
import { Summary } from "../Summary/index";
import { TransactionalTb } from "../TransactionalTb";

export function Dashboard(){
   
     return(
        <Container>
            <Summary /> 
            <TransactionalTb />
        </Container>
     )

}