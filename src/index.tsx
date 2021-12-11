import {createServer, Model} from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


createServer({
  models: {
   transaction:Model

  },

  seeds(server) {
     server.db.loadData({
       transactions:[{
         id:1,
         title:'freelance',
         value:5000,
         desc:'Programação',


       },

       {
        id:2,
        title:'Alugel',
        value:1100,
        desc:'Aluguel Apt',
        

      }
       ],
      })
  },
  
  
 routes(){
   this.namespace='api';
   this.get('/transactions',() =>{
        return[
           this.schema.all('transaction')
        ]
   })

   this.post('/transactions', (schema,request)=> {

      const data = JSON.parse(request.requestBody);
      return schema.create('transaction',data)

   })
 }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


