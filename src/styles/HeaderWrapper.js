import styled from 'styled-components';

 const HeaderWrapper = styled.header`
    .contact-links{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.6rem;
        
        width: 100%;
        height: 2rem;
        box-shadow: #D4D4D4 5px 5px 10px 0;
    }
    .logo-image{
        width: 15rem;
        padding-left: 10%;
        padding-top: 2rem;
    }
    .logo-image:hover{
        cursor: pointer;
    }
    .contact-titles-container{
        display: flex;
        gap: 1rem;
        margin: 0 1.5rem;
    }
    .contact-icons-container{
        display: flex; 

    }
    .contact-icons-container > *{
        padding: 0.6rem;
    }
    .contact-titles-container > *: hover,
    .contact-icons-container > * :hover,
    .magnifying-icon: hover{
        cursor: pointer;
        opacity: 0.6;
    }

    .magnifying-icon{
        margin-right: 50px;
    }   
`

export default HeaderWrapper