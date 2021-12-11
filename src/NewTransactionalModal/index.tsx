import Modal from 'react-modal';
import { Container,TransactionalTypeContainer,RadioBox } from './styles';
import closeimg from '../assets/close.svg';
import incomeimg from '../assets/income.svg';
import outcomeimg from '../assets/outcome.svg';
import {FormEvent, useState} from 'react';
import { api } from '../services/api';

interface NewTransactionalModalProps{
 
    isOpen:boolean;
    onRequestClose:()=>void;
}



export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionalModalProps){
    
    const [type, setType]= useState('deposit');
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [value,setValue]=useState(0);
    
    function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
    
        const data =({
            title,
            desc,
            value
        
        })

       
           
        api.post("/transactions",data);
      
    }
    return(

  <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}  
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

    <button type ="button" className="react-modal-close"
    onClick={onRequestClose}
    >
       <img src ={closeimg} alt="close">

       </img>
    </button>    
           
     
 
      <Container onSubmit= {handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input
              placeholder="Título"
              value={title}
              onChange={event=>setTitle(event.target.value )}
          />

          <input 
              type="number"
              placeholder="Preço"
              value={value}
              onChange={event=>setValue(+event.target.value)}

          />

           <TransactionalTypeContainer >
               <RadioBox 
                   
               type="button"
                onClick={()=>{setType('deposit')}}
                isActive={type==='deposit'}
               >
                   
                <img src = {incomeimg} alt="entradas" >

                </img>
                  <span>Entrada</span>
               </RadioBox>

               <RadioBox 
                   
                   type="button"
                    onClick={()=>{setType('withdraw')}}
                    isActive={type==='withdraw'}
                   >
                       
                    <img src = {outcomeimg} alt="saidas">
    
                    </img>
                      <span>Saida</span>
                   </RadioBox>
                  
               
            

            </TransactionalTypeContainer>    

          <input 
            placeholder="Categoria"
            value ={desc}
            onChange={event=>setDesc(event.target.value)}
          /> 

          <button type="submit" >
              Cadastrar
          </button>

      </Container>    

      </Modal>
      
        
    )
}