import Blusa from "./img/blusa.png"
import Calca from "./img/calca.png"
import Fones from "./img/fones.png"
import Sapatinho from "./img/sapatinho.png"
import Tenisnike from "./img/tenisnike.png"
import Tenis3 from "./img/tenis3.png"
import bolinhas from "./img/bolinhas.png"
import styled from "styled-components";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Card1 from "./img/card1.png"
import Card2 from "./img/card2.png"
import Card3 from "./img/card3.png"
import Produto from "./Produto";



const Sections = styled.section`
.sectionpai {
  width: 100%;
  height: 450px;
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sectionfilho {
  width: 98%;
  height: 85%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  
}


.textos h6 {
  color: #F6AA1C;
  ;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.textos h4 {
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.esquerda {
  width: 100%;
  height: 100%;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.direita {
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: start;
  align-items: center;
}


.verofertas {
  background-color: #C92071;
  height: 45px;
  width: 180px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  cursor: pointer;
  box-shadow: none;
}
.verofertas:hover {
  background-color: #9e1859;
  transition: 1s;
  -o-transition: 1s;
  
}
.tenis {
  transform: rotate(-20deg);
  
}
`;

const Section = () => {
    return (
        <Sections>
            <div className="sectionpai">
                <div className="sectionfilho" >

                    {/* Sessão da esquerda ← */}

                    <div className="esquerda pl-2">
                        <div className="textos">
                            <h6 className="font-bold text-2xl">Melhores ofertas personalizadas</h6>
                            <br />
                            <h1 className="px-2 font-bold text-4xl">Queima de <br /> estoque Nike 🔥</h1>
                            <br />
                            <h4 className="text-gray-600" >Consequat culpa exercitation mollit nisi excepteur do <br />
                                do tempor laboris eiusmod irure consectetur.</h4>
                            <br />
                            <Button label="Ver Ofertas" className="verofertas" />
                        </div>
                    </div>
                    <div className="direita">
                        <img src={Tenisnike} alt="" className="tenis" />
                    </div>
                </div>
                <div className="bolinhas">
                    <img src={bolinhas} alt="" />
                </div>

                {/* inicio da coleção em destaque dos cards */}

                <div className="inline-flex items-center w-full  justify-start  ">
                </div>

            </div>

            <div >
                <h1 className="text-gray-700 font-bold relative w-80 left-12 py-4 px-8 mx-8" >Coleção em destaque</h1>

                <div id="" className="w-full flex p-10 items-center justify-center">
                    <ul className=" flex gap-4 justify-content-center">
                        <div className="p gap-20 w-full h-13rem inline-flex" >

                            <img src={Card1} alt="" className="border-round cursor-pointer shadow-black hover:shadow-lg hover:scale-110 transition w-80 h-52" />
                            <img src={Card2} alt="" className="border-round cursor-pointer hover:shadow-lg hover:scale-110 transition w-80 h-52" />
                            <img src={Card3} alt="" className="border-round cursor-pointer	hover:scale-110 transition hover:shadow-lg w-80 h-52" />
                            <h6 className="absolute top-0 right-8 bg-green-200 border-round-md "></h6>


                        </div>


                    </ul>
                </div>

            </div>

            {/* DIVISÃO - PRODUTOS EM ALTA */}

           

            {/* fim da coleção em destaque dos cards1 */}

            {/* Coleção em Destaque 2 */}

            <div className="w-full flex justify-center pt-9">
                <h1 className="font-bold text-gray-700 ">Coleção em destaque</h1>
            </div>

            <div className=" w-full h-32 mb-8 flex justify-center items-center gap-2">
                
                <div className="w-28 h-40 rounded flex-col flex justify-center items-center gap-y-2">
                    
                <div className="bg-gray-200 w-20 h-20 rounded-full flex justify-center items-center">
                    <img src={Blusa} className="w-14 h-14" />
                    </div>
                    <h1 className="text-pink-500 font-bold">Camisetas</h1>
                </div>
                <div className="w-28 h-40 rounded flex-col flex justify-center items-center gap-y-2">
                    
                <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center hover:bg-pink-500 transition  hover:ease-in cursor-pointer">
                    <img src={Calca} className="w-14 h-14" />
                    </div>
                    <h1 className="text-gray-700 font-bold">Calças</h1>
                </div><div className="w-28 h-40 rounded flex-col flex justify-center items-center gap-y-2">
                    
                <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center hover:bg-pink-500 transition  hover:ease-in cursor-pointer">
                    <img src={Calca} className="w-14 h-14 " />
                    </div>
                    <h1 className="text-gray-700 font-bold">Bonés</h1>
                </div><div className="w-28 h-40 rounded flex-col flex justify-center items-center gap-y-2">
                    
                <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center hover:bg-pink-500 transition  hover:ease-in cursor-pointer">
                    <img src={Fones} className="w-14 h-14" />
                    </div>
                    <h1 className="text-gray-700 font-bold">Headphones</h1>
                </div><div className="w-28 h-40 rounded flex-col flex justify-center items-center gap-y-2">
                    
                    <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center hover:bg-pink-500 transition  hover:ease-in cursor-pointer">
                    <img src={Sapatinho} className="w-14 h-14" />
                    </div>
                    <h1 className="text-gray-700 font-bold">Tênis</h1>
                </div>
            </div>

            
            {/* FIM Coleção em Destaque 2 */}


              <div className="inline-flex items-center w-full justify-between gap-8 px-28 py-5">

                <h1 className=" text-gray-700 font-bold" >Produtos em Alta</h1>
                <Link to="/Produtos"><h4 className="font-normal text-pink-500 cursor-pointer hover:text-pink-400">Ver todos <i className="pi pi-arrow-right"></i></h4></Link>
            </div>   

            {/* LISTA DE PRODUTOS */}

            <div class=" justify-center left-64 rounded   grid  grid-flow-col gap-8 pb-8">

                {/* grid 01 */}

                <div className=" ">
                    <div className="  w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>        <Produto />
                        </Link>
                    </div><div className=" w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>  <Produto />
                        </Link>
                    </div>

                </div>

                {/* grid 02 */}

                <div className="">
                    <div className="  w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>  <Produto />
                        </Link>
                    </div>
                    <div className=" w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>  <Produto />
                        </Link>
                    </div>

                </div>

                {/* grid 03 */}

                <div className=" ">
                    <div className="  w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>        <Produto />
                        </Link>
                    </div>
                    <div className=" w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>  <Produto />
                        </Link>
                    </div>

                </div>
                <div className=" ">
                    <div className="  w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>        <Produto />
                        </Link>
                    </div>
                    <div className=" w-40 h-40 mb-24">
                        <Link to={"/DetalhesDoProduto"}>  <Produto />
                        </Link>
                    </div>

                </div>
            </div>
            {/* fim da lista de produtos */}




            {/* INICIO DO ULTIMO CARD */}

            <div className="w-full h-screen items-center justify-center bg-white flex p-40 gap-10 bg-gray-100">
                {/* conteudo da esquerda */}

                <div className="w-3/5 justify-center items-center flex rounded-full bg-gray-100 h-96 ">

                    <img src={Tenis3} className="w-98 h-98" />
                </div>

                {/* FIM do conteudo da esquerda */}

                {/* conteudo da direita */}

                <div className="w-4/5 h-80 flex-column gap-x-5">
                    <h6 className="text-pink-600 font-bold">Oferta Especial</h6>
                    <br />
                    <h1 className="text-4xl font-bold text-gray-800">Air Jordan edição de
                        colecionador</h1>
                    <br />
                    <h6 className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente ad animi ipsam quidem optio eligendi, nemo illum architecto incidunt amet doloribus doloremque non harum accusamus ea rerum modi corrupti?</h6>
                    <br />
                    <Button label="Ver Ofertas" className="verofertas" />
                </div>

                {/* FIM do conteudo da direita */}

            </div>

            {/* FIM DO ULTIMO CARD */}


        </Sections>
    );
}

export default Section; 