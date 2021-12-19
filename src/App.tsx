
import { GlobalStyle } from './Global';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import {useState} from 'react';

import { NewTransactionModal } from './NewTransactionalModal';
import { TransactionalContext, transactionsProvider } from './TransactionalContext';

function App() {
const [isNewTransactionalModalOpen,setIsNewTransactionalModalOpen] = useState(false);
   
     function handleOpenNewTransactionalModal(){
         setIsNewTransactionalModalOpen(true)
     }

     function handleCloseNewTransactionalModal(){
        setIsNewTransactionalModalOpen(false)
    }
  return (
   
    <transactionsProvider>
     <GlobalStyle />
     <Header onOpenNewTransactionalModule={handleOpenNewTransactionalModal} />
       
     <NewTransactionModal 
        isOpen={isNewTransactionalModalOpen}
        onRequestClose={handleCloseNewTransactionalModal}
     />
     <Dashboard />
    
    </transactionsProvider>
  );
}

export default App;
