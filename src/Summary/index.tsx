import {Container} from "./styles"
import income from "../assets/income.svg"
import outcome from "../assets/outcome.svg"
import total from "../assets/total.svg"
import { useContext } from "react"
import { TransactionalContext } from "../TransactionalContext"
export function Summary(){
    
    const data = useContext(TransactionalContext);
   
    
    return(
     <Container >
         <div>
             
            <header>
                <p>Entradas</p>
                <img src ={income} alt="entradas"></img>
            </header>
            <strong>R$1000,00</strong>
         </div>

  
         <div>
             
            <header>
                <p>Saidas</p>
                <img src ={outcome} alt="saidas"></img>
            </header>
            <strong>R$500,00</strong>
         </div>

         <div className="highlight-background">
             
            <header>
                <p>Total</p>
                <img src ={total} alt="Total"></img>
            </header>
            <strong>R$500,00</strong>
         </div>       
     </Container>    
    )
};