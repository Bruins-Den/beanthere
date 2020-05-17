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
        color:#72b0bd;
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
    color:#72b0bd;
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
    color:#72b0bd;
   
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
        color: #72b0bd;
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
`

export const SideBar = styled.div`
	
#Menu {
    font-family: 'Karla';
    height: 100vh;
  }
  
  #page-wrap {
    text-align: center;
    overflow: auto;
  }
  

  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: white;
  }
  
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  .bm-burger-bars {
    background: #373a47;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }
  
  .bm-item-list {
    color: #b8b7ad;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  
`;

