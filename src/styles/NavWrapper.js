import styled from 'styled-components';

 const NavWrapper = styled.nav`
   display: flex;
   margin: 0 auto;
   padding: 0 10%;
   
   
   gap: 1px;
   .nav-option{
    padding: 0;
    margin: 0;
    font-style: bold;
    font-family: 'Inter';
    width: 100%;
    text-align: center;

    color: white;
    background: #303030;
    
    

    padding: 0.6rem 1rem;
   }
   .nav-option: hover{
    cursor: pointer;
    opacity: 0.85;
   }
`

export default NavWrapper