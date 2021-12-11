import { Container } from "./styles";
import {useContext, useEffect, useState} from "react";
import { api } from "../services/api";
import { TransactionalContext } from "../TransactionalContext";



export function TransactionalTb(){


const data = useContext(TransactionalContext)


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
               <tbody >
                   {transaction.map(transactions=>{
                       return(
                        <tr key={transactions.id}>
                        <td className="text-title">{transactions.title}</td>
                        <td className="deposit" >{transactions.value}</td>
                        <td >{transactions.desc}</td>
                        <td>20/10/2021</td>
                    </tr>
                       )
                   })}
                 
               </tbody>
           </table>

        </Container> 
    )
}