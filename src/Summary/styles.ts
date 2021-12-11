import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3,1fr);
  //Deixa as caixas alinhadas

  gap:2rem;
  //Altera os espações entre as caixas

  margin-top:-10rem;

  //Deixou as caixas no topo

  div{
      background:var(--shape);
      padding:1.5rem 2rem;
      border-radius:0.25rem;
      //Não vi diferença
     
      color:var(--text--title);
  }

  header{
      display:flex;
      //Alinhou as caixas
      align-items: center;
      justify-content: space-between;
  }

  strong{
      display:flex;
      margin-top:1rem;
      font-size:2rem;
      font-weight: 500;
      line-height: 3rem;
  }

  .highlight-background{
      background:var(--green);
      color:white;
  } 


`;