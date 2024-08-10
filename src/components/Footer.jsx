import Sociais from "./img/logobranca.png"
import Facebook from "./img/facebook.png"
import Twitter from "./img/twitter.png"
import Instagram from "./img/instagram.png"
import styled from "styled-components"

const FooterPai = styled.footer `

.footerpai {
  width: 100%;
  height: 450px;
  background-color: rgb(20, 20, 20);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.footerfilho {
  width: 95%;
  height: 250px;
  display: flex;
  text-align: start;
  justify-content: center;
  gap: 150px;
  border-bottom: 1px solid rgba(211, 211, 211, 0.589);

  
}
.informacao ul  {
  font-size: 20px;
  color: white;
  gap: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 
}
.informacao ul li {
  cursor: pointer;
}
.informacao ul li:hover  {
  
  color: rgb(224, 224, 224);

}


.categoria ul {
  font-size: 20px;
  color: white;
  gap: 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.categoria ul li {
  cursor: pointer;
}
.categoria ul li:hover {
  color: rgb(224, 224, 224);
}

.contato ul {
  font-size: 20px;
  color: white;
  gap: 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.contato ul li {
  cursor: pointer;
}
.contato ul li:hover {
  color: rgb(224, 224, 224);
}

.lorem h1 {
  font-size: 15px;
  width: 250px;

  color: lightgray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.sociaisicons {
  display: flex;
  gap: 40px;
  cursor: pointer;
}
.logosociais {
  display: flex;
  flex-direction: column;
  gap: 25px;
 
}
.logosociais:hover {
  color: lightgrey;
}
.direitos {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 20px;
  width: 90%;
  height: 20px; 
}
.direitos h6 {
  
  font-size: 18px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
}
`;

const Footer = () => {
    return ( 
       <FooterPai>
        <div className="footerpai">
            <div className="footerfilho">
                <div className="logosociais">
                    <img src={Sociais} alt="" />
                    <div className="lorem">
                       <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur eligendi debitis eaque hic, voluptatem est vitae placeat minus nam eius beatae officia quaerat quos dolore illo sequi maiores mollitia.</h1>
                    </div>

                    <div className="sociaisicons">
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />
                    </div>
                </div>
                <div className="informacao" >
                     <ul>
                        <li><b>Informação</b></li>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus pedidos</li>
                    </ul>
                </div>
                <div className="categoria">
                     <ul>
                        <li><b>Categorias</b></li>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>   
                </div>
                <div className="contato"> 
                    <ul>
                        <li><b>Contato</b></li>
                        <li>Av. Santos Dumont, 1510 - 1  andar - Aldeota, Fortaleza - CE, 60150-161</li>
                        <li>(85) 3051-3411</li>
                    </ul>
                </div>

               

            </div>
            <div className="direitos">
            <h6>@ 2022 Digital College</h6>

</div>
        </div>        

        </FooterPai>
     );
}
 
export default Footer;