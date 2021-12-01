import { Container } from "./styles";
import {useEffect} from "react";
import { api } from "../services/api";



export function TransactionalTb(){

   useEffect(()=>{
       api.get('/api/transactions')
       .then(response=> console.log(response))

   },[]);


    return(
        <Container>

           <table>
               <thead>
                   <tr>
                       <th>Título</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td className="text-title">Desenvolvimento Web</td>
                       <td className="deposit" >R$10.000</td>
                       <td >Tecnologia</td>
                       <td>20/10/2021</td>
                   </tr>
                   <tr>
                   <td className="text-title">Casa</td>
                       <td className="withdraw">R$-1100.00</td>
                       <td >Aluguel</td>
                       <td>2/10/2021</td>
                   </tr>
                   <tr>
                   <td className="text-title">Light</td>
                       <td className="withdraw">R$-300</td>
                       <td >Conta de luz</td>
                       <td>6/10/2021</td>
                   </tr>
               </tbody>
           </table>

        </Container> 
    )
}