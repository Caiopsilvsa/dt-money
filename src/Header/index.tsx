
import logoimg from '../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps{
    onOpenNewTransactionalModule:()=>void;
}

export function Header({onOpenNewTransactionalModule}:HeaderProps){
    
    return(
       
      <Container >
          <Content> <img src={logoimg} alt="dtMoney"></img>
          <button type="button" onClick={onOpenNewTransactionalModule}>
              Nova transação
          </button>
          
          </Content>
         
        
        </Container>
       
    )
}