import styled from "styled-components";


export const Container = styled.form`
  h2{
       color:var(--text--title);
       font-size:1rem;
       margin-bottom:2rem;

  }

  input{
      width:100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius:0.25rem;

      border:1px solid #d7d7d7;
      background:#e7e9ee;

      font-weight: 400;
      font-size:1rem;

      &+input{
          margin-top: 1rem;
      }
    
       
    }

    button[type="submit"]{
           width: 100%;
           padding: 0 1.5rem;
           height: 4rem;
           background:var(--green);
           color:#FFF;
           border-radius:0.25rem;
           border:0;
           font-size:1rem;
           margin-top:1.5rem;

           &:hover{
          filter:brightness(0.9)
      } 
    

       }

       `
       export const TransactionalTypeContainer = styled.div`
        margin:1rem 0;
        display:grid;
        grid-template-columns: 1fr 1fr;

       

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color:var(--text--title);
        }        
       `
     interface radioButtonProps{
         isActive:boolean
     }

     export const RadioBox=styled.button<radioButtonProps>`
       button{

        height:4rem;
            border:1px solid #d7d7d7;
            border-radius: 0px.25rem;
            background: ${(any)=>any.isActive?'#ccc':'transparent'};
            display: flex;
            align-items: center;
            justify-content: center;

            img{
            width: 20px;
            height: 20px;
            }
        }
`    

  
