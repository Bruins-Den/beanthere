import styled from 'styled-components';

export const NavBar = styled.nav`
display: flex;
flex-flow: row nowrap;
justify-contents: space-evenly;
align-items: left;

#menu{
    position:flex;
    top:0;
    margin:auto;
    text-align:center;
    display:flex;
    align-items:left;
    justify-content:left;
    height:100%;

    li{
      margin:0 20px;
      position:relative;
      display:inline;

      a{
        text-decoration:none;
        display:block;
        padding:5px 0;
        font-family:'Karla';
        font-size:16px;
        line-height:1;
        position:relative;
        z-index:1;
        text-align: center;
        color:#383287;
        background-size: 200% 100%;
        background-position: -100%;
        transition: all 0.3s ease-in-out;

        &:before{
          display:block;
          content:'';
          width:0;
          height:3px;
          bottom:5px;
          left:0;
          bottom:-2px;
          z-index:0;
          position:absolute;
          background:#d85235;
          transition: all 0.3s ease-in-out;
        }

        &:hover{
          color:#d85235;
          &:before{
            width:100%;
          }
        }
      }
    }
  }
  
.logo{
    font-size:35px;
    font-weight: bold;
    color: #383287;
    float: left;
    padding: 10px;
    font-family: Crimson Pro;
    /*font-family: Lora;*/
    /*font-family: Karla;*/
    /*font-family: Playfair Display;*/
    /*font-family: Montserrat;*/
}

.logo a {
    text-decoration: none;
    color:#383287;
    &:hover{
        color:#d85235;
    }
}
#searchbar{
    position:flex;
    margin:auto;
    display:flex;

    .searchBar{
        float:right;
        padding: 10px;
    }

    body {
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100%;
        background: #fff;
    }
    
    form{
        position: relative;
        top: 50%;
        left: 50%;
        transition: all 1s;
        width: 0px;
        height: 40px;
        box-sizing: border-box;
        border-bottom: 2px solid #d85235;
    }
    
    input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;;
        height: 42.5px;
        line-height: 30px;
        background:none;
        border: none;
        display: none;
        font-size: 1em;
        padding: 0 20px;
    }
    
    .coffeeIcon{
        box-sizing: border-box;
        padding: 10px;
        width: 42.5px;
        height: 42.5px;
        transform: translate(-28%,10%);
        position: absolute;
        top: 0;
        left: 0;
        color: #383287;
        text-align: left;
        font-size: 1.2em;
        transition: all 1s ease;
    }
    
    form:hover{
        width: 200px;
        cursor: pointer;
    }
    
    form:hover input{
        display: block;
    }
    
    form:hover .coffeeIcon{
        opacity: 0;
        transition: all 0.2s ease;
    }
}
`;

