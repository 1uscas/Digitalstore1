import { Link } from "react-router-dom";
import logos from "./img/logoname.png";
import styled from "styled-components";
import { Button } from "primereact/button";


const HeaderPai = styled.header `

  width: 100%;
  height: 150px;
  padding-bottom: 22px;
  justify-content: center;
  display: flex;
  flex-direction: column;

*{
    list-style: none;
    text-decoration: none;
}

.headerfilho {
  
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0%;
  text-align: center;
  gap: 65px;
}
.barrapesquisa {
  background-color: rgb(241, 241, 241);
  width: 500px;
  height: 50px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  position: relative;
  right: 10px;
  text-align: left;
  padding-left: 10px;
  
}
input:focus {
  outline: none;
}


.botoes {
  display: flex;
  gap: 20px;
  align-items: center;
}
.entrar {
  background-color: #C92071;
  height: 50px;
  width: 120px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  cursor: pointer;
  box-shadow: none;
}


.entrar:hover {
  background-color: #9e1859;
  transition: 1s;
  -o-transition: 1s;
  
}

.cadastro {
  background-color: transparent;
  color: rgb(104, 104, 104);
  width: 100px;
  height: 20px;
  font-size: 18px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  border: none;
  cursor: pointer;
}
.icon1{
  color: #C92071;
  cursor: pointer;
  
}
.icon1:hover {
  color: #C92071;
  transition: 1s;
  transform: scale(1.1);
}
.menu ul {
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: pointer;
}
nav ul li:hover {
  color: #C92071;
  transition: 0.3s;
}
.menu ul li{
  color: rgb(48, 48, 48);
  
}
.menu:-ms-line-break {
  color: #C92071;
  
}
a {
    color: inherit;
}
.menu {
  
  width: 430px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: relative;
  padding-left: 5%;
  top: 20px;
}


`;

const Header = () => {
    return ( 
       <HeaderPai>
        <div className="headerpai">
            <div className="headerfilho">
                <img src={logos} alt="" />
                
                <input type="text" className="barrapesquisa" placeholder="Pesquisar produto..." />
                <i className="pi pi-search" style={{ color: '#413f3f', fontSize: '2rem' 
                    
                        ,width: `30px`
                        ,height: `30px`
                        ,margin: `-50px`
                        ,position: `relative`
                        ,left: `-60px`
                        ,opacity: `30%`
                        ,cursor: `pointer`
                      
                      
                } }></i>

                
                 <div className="botoes">
                    <button className="cadastro"><u>Cadastre-se</u></button>
                    <Button label="Entrar" className="entrar"/> 
                 </div>
                 <i className="pi pi-shopping-cart" style={{ color: '#4e4e4e', fontSize:'2em'}}></i>
                 
               
             </div>
             <nav className="menu" >
                <ul>
                    <li className="active:bg-blue-600 after:text-red-500 " class="home"><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/produtos"}>Produtos</Link></li>
                    <li>Categorias</li>
                    <li>Meus Pedidos</li>
                </ul>
             </nav>
        </div>        
        
        </HeaderPai>
    
     );
}
 
export default Header;