import styled from 'styled-components';

 const ClientEndWrapper = styled.div`
   
   --box-padding: 1.5rem;
   padding: 0 10% 5% 10%;

   .tracking-number{
      text-align: center;
      font-size: 1.25rem;
   }

   .item-received-container,
   .item-sold-container{
      display: flex;

      gap: 1rem;
      

   }
   
   .item-received-content-container{
      align-self: center;
      display: flex;
      justify-content: space-around;
      padding: var(--box-padding);
      width: calc(41.875rem - var(--box-padding));
      height: calc(7.6875rem - var(--box-padding));
      background: #d4828c;
      border-radius: 0.1rem;
   }

   .item-received-separation-line{
      background: #d4828c;
   }

   .item-sold-content-container{
      display: flex;
      justify-content: space-around;
      padding: var(--box-padding);
      width: calc(41.875rem - var(--box-padding));
      height: calc(11.125rem - var(--box-padding));
      background: #ae1022;
      border-radius: 0.1rem;
   }
   

   .line{
      width: 0.3125rem;
      padding: var(--box-padding) 0;
      height: calc(11.125rem - var(--box-padding));
      border-radius: 0.1rem;
   }

   .item-sold-separation-line{
      background: #ae1022;
   }

   .receive-text-container > *{
      padding: 0;
      margin: 0;
   }
   .receive-text-container{
      display: grid;
   }
   .sold-text-container{
      display: flex;
      gap: 1rem;
      align-items: center;
   }

   
   .quick-nav{
      display: inline-block; 
      text-decoration: underline;
      cursor: pointer;
      color: rgb(50,50,50);
      font-size: 1.1875rem;
   }

   .quick-nav:hover{
      color: rgb(10,10,10)
      
   }

   .proccessed-date{
      font-size: 1.875rem;
   }

   .inputs-container{
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
   }

   .instruction-message{
      color: #AE1022;

      text-align: center;
      font-family: Inter;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.3125rem; /* 52.5% */
   }

   .code-input{
      
      color: #FFF;

      text-align: center;
      font-family: Inter;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.3125rem; /* 52.5% */

      border: none;

      width: 18.75rem;
      height: 6rem;

      border-radius: 1.875rem;
      background: #AE1022;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.60);

   }
   .code-submit-btn{
      width: 8.375rem;
      height: 2.6875rem;

      border-radius: 0.9375rem;
      background: #AE1022;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.60);
      border: none;
      cursor: pointer;

   }
   .code-submit-btn:hover{
      filter: contrast(120%);
      
   }

   .code-submit-text{
      width: 8.0625rem;
      height: 2.6875rem;

      color: #FFF;
      text-align: center;
      font-family: Inter;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.3125rem; /* 52.5% */
   }

   .not-found{
      text-align: center;
      color: red;
   }
   .soldParagraph{
      color: #FFF;

      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;

   }
`

export default ClientEndWrapper