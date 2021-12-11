
import { GlobalStyle } from './Global';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import {useState} from 'react';

import { NewTransactionModal } from './NewTransactionalModal';
import { TransactionalContext } from './TransactionalContext';

function App() {
const [isNewTransactionalModalOpen,setIsNewTransactionalModalOpen] = useState(false);
   
     function handleOpenNewTransactionalModal(){
         setIsNewTransactionalModalOpen(true)
     }

     function handleCloseNewTransactionalModal(){
        setIsNewTransactionalModalOpen(false)
    }
  return (
   
    <TransactionalContext.Provider value={[]}>
     <GlobalStyle />
     <Header onOpenNewTransactionalModule={handleOpenNewTransactionalModal} />
       
     <NewTransactionModal 
        isOpen={isNewTransactionalModalOpen}
        onRequestClose={handleCloseNewTransactionalModal}
     />
     <Dashboard />
    
    </ TransactionalContext.Provider>
  );
}

export default App;
