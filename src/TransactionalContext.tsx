import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


export const TransactionalContext = createContext<transactions[]>([]);
interface transactions {
    title:String,
    id:number,
    desc:String,
    value:number

}

interface transactionsProviderProps{
    children:ReactNode;
}; 

export function transactionsProvider({children}:transactionsProviderProps){
    const [transaction,setTransaction] = useState<transactions[]>([]);

   useEffect(()=>{
       api.get('/transactions')
       .then(response=> setTransaction(response.data.transactions))
   
     
   },[]);

      return(
        <TransactionalContext.Provider value ={transaction}>
              {children}
        </TransactionalContext.Provider>
        
      )

}