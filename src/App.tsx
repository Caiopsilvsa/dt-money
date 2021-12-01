
import { GlobalStyle } from './Global';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import {useState} from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './NewTransactionalModal';

function App() {
const [isNewTransactionalModalOpen,setIsNewTransactionalModalOpen] = useState(false);
   
     function handleOpenNewTransactionalModal(){
         setIsNewTransactionalModalOpen(true)
     }

     function handleCloseNewTransactionalModal(){
        setIsNewTransactionalModalOpen(false)
    }
  return (
   
    <>
     <GlobalStyle />
     <Header onOpenNewTransactionalModule={handleOpenNewTransactionalModal} />
       
     <NewTransactionModal 
        isOpen={isNewTransactionalModalOpen}
        onRequestClose={handleOpenNewTransactionalModal}
     />
     <Dashboard />
    
    </>
  );
}

export default App;
