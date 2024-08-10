import { Link, useParams } from "react-router-dom";
import Tenisnike from "./img/tenisnike.png"
import Stars from "./img/stars.png"
import Avaliacao from "./img/avaliacao.png"
import { Button } from "primereact/button";
import { RadioButton } from 'primereact/radiobutton';
import Produto from "./Produto";



const ProductDetails = () => {

    const { id, nome } = useParams();

    return (
        <>

            <div className="  p-2 mb-4 pb-4 pt-4 flex">

            </div>
            <div className="w-full ">
                <div class=" pl- pb-5 w-full left flex relative">
                   <h1 className="relative flex left-16"> <b> Home</b> / Produtos / Tênis / Nike / Nike Revolution 6</h1>
                </div>

                {/* div main dos dois cards */}

                <div class="w-full   py-2 gap-20 justify-center flex">

                    {/* card do tenis a esquerda ← */}

                    <div class="w-1/2 pl-20 pr-20 items-center justify-center flex  bg-gray-200 rounded h-150">
                        <img src={Tenisnike} alt="" className="" />
                    </div>

                    {/* card do texto a direita → */}

                    <div className=" w-50 h-100  flex-col gap-x-8">
                        <h1 className="font-sans font-bold text-lg">Tênis nike revolution 6 next nature masculino</h1>
                        <h6 className="text-gray-500">Casual | Nike | REF:38416711</h6>
                        <div className="flex w-40 pt-2">
                            <img src={Stars} alt="" />
                            <img src={Avaliacao} alt="" className="pl-3 " />
                        </div>
                        <div class="flex gap-2 pt-2">
                        <h1 className="relative top-2 left-1">R$</h1><h1 className="font-bold text-3xl">100,00 </h1> <h2 className="text-sm line-through text-700 opacity-50 pt-3">R$200,00</h2>
                        </div>
                        <h4 className="text-gray-400">Descrição do produto</h4>
                        <h4 className="font-normal w-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quisquam voluptates molestias nostrum voluptatum doloremque, necessitatibus nobis quo facilis doloribus, possimus culpa consequatur explicabo error totam nesciunt deleniti ea expedita.</h4>
                        <h4 className="text-gray-400">Tamanho</h4>
                        <div className="flex gap-2 pt-3 pb-3">
                            <div className=" w-7 h-7 bg-red-500 justify-center items-center flex rounded">
                                38
                            </div>
                            <div className=" w-7 h-7 bg-red-500 justify-center items-center flex rounded">
                                36
                            </div>
                            <div className=" w-7 h-7 bg-red-500 justify-center items-center flex rounded">
                                42
                            </div>
                            <div className=" w-7 h-7 bg-red-500 justify-center items-center flex rounded">
                                40
                            </div>
                            <div className=" w-7 h-7 bg-red-500 justify-center items-center flex rounded line-through
">
                                44
                            </div>
                        </div>

                        <h4 className="text-gray-400 ">Cor</h4>

                        <div className="flex gap-2 pt-2">
                            <div class=" w-40 gap-3 mb-2 flex">
                                <input type="radio" name="radio" id="" class="h-7 w-7 appearance-none rounded-full rounded-e-full rounded-bl-full bg-red-400 border-4 checked:border-pink-500" />

                                <input type="radio" name="radio" id="" class="h-7 w-7 appearance-none rounded-full rounded-e-full rounded-bl-full bg-lime-400 border-4 checked:border-pink-500" />

                                <input type="radio" name="radio" id="" class="h-7 w-7 appearance-none rounded-full rounded-e-full rounded-bl-full bg-blue-400 border-4 checked:border-pink-500" />

                                <input type="radio" name="radio" id="" class="h-7 w-7 appearance-none rounded-full rounded-e-full rounded-bl-full  bg-yellow-400 border-4 checked:border-pink-500  " />

                            </div>
                        </div>
                        <Button label="Comprar" className=" w-40 h-10 bg-yellow-500 border-none outline-none mt-3 text-white" />
                    </div>

                </div>
                {/* fim dos cards da direita e esquerda ← */}

                {/*↓ cores dos tenis abaixo ↓*/}

                <div className=" w-full flex h-40 justify-start items-center gap-5 pl-20 ">

                    <div className="bg-lime-300 w-28 rounded p-2 h-28 justify-center flex items-center  ">
                        <div class="">
                            <img src={Tenisnike} alt="" className="" />
                        </div>
                    </div>
                    <div className="bg-red-300 w-28 rounded p-2 h-28 justify-center flex items-center ">
                        <div class="">
                            <img src={Tenisnike} alt="" className="" />
                        </div>
                    </div>
                    <div className="bg-blue-300 w-28 rounded p-2 h-28 justify-center flex items-center ">
                        <div class="">
                            <img src={Tenisnike} alt="" className="" />
                        </div>
                    </div>
                    <div className="bg-pink-300 w-28 rounded p-2 h-28 justify-center flex items-center ">
                        <div class="">
                            <img src={Tenisnike} alt="" className="" />
                        </div>
                    </div>
                    <div className="bg-yellow-300 w-28 rounded p-2 h-28 justify-center flex items-center ">
                        <div class="">
                            <img src={Tenisnike} alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>


            <div>
            
                   {/* DIVISÃO - PRODUTOS EM ALTA */}

                   <div className="inline-flex items-center w-full justify-between gap-8 px-28 py-5">  

<h1 className=" text-gray-700 font-bold text-lg" >Produtos Relacionados</h1>
<Link to="/Produtos"><h4 className="font-normal text-pink-500 cursor-pointer">Ver todos <i className="pi pi-arrow-right"></i></h4></Link>    
</div>

{/* fim da coleção em destaque dos cards1 */}



{/* LISTA DE PRODUTOS */}

<div class=" justify-center left-64 rounded   grid  grid-flow-col gap-8 pb-8">
    
    {/* grid 01 */}
    
    <div className=" ">
        <div className="  w-60 h-60 aligm-center flex mb-10 mt-10">
            <Link to={"/DetalhesDoProduto"}>        <Produto />
            </Link>
        </div>
        
    </div>

     {/* grid 02 */}

    <div className="">
        <div className="  w-60 h-60 aligm-center flex mb-10 mt-10">
            <Link to={"/DetalhesDoProduto"}>  <Produto />
            </Link>
        </div>
        
        
    </div>

     {/* grid 03 */}

     <div className=" ">
        <div className="  w-60 h-60 aligm-center flex mb-10 mt-10">
            <Link to={"/DetalhesDoProduto"}>        <Produto />
            </Link>
        </div>
           
            
    </div>
    <div className=" ">
        <div className="  w-60 h-60 aligm-center flex mb-10 mt-10">
            <Link to={"/DetalhesDoProduto"}>        <Produto />
            </Link>
        </div>
            
            
    </div>
</div>
 {/* fim da lista de produtos */}
            </div>

        </>

    );
}

export default ProductDetails;