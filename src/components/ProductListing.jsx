import { Link } from "react-router-dom";
import Tenis2 from "./img/tenis2.png"
import { Checkbox } from "primereact/checkbox";
import Produto from "./Produto";
import { Dropdown } from "bootstrap";
 


const ProductListing = () => {
    return (
        <>
            <section className="pt-8">

                {/* Lista e Ordem */}

                <div className="flex w-full  flex-auto justify-between pb-4 shadow-lg  p-2 items-center gap-8 px-8 ">

               
                    <h1 className="pl-8 text-lg font-bold text-gray-600">Lista de Produtos</h1>



                    <div class="flex pr-8 ">
                        <label for="state" className="  " ></label>
                        <select id="" class="text-sm px-2  h-12 align-items-center justify-content-center border-gray-300 border-2 rounded text-gray-600" >
                            <option className="p-8 "><b>Ordenar por</b>: mais relevante</option>
                            <option>Mais vendidos</option>
                            <option>Menos preço</option>
                            <option>Maior preço</option>
                            <option>Lançamentos</option>
                        </select>
                    </div>
                </div>

                {/* Fim de Lista e Ordem */}

                <div className="bg-gray-50 flex-auto p-20 flex  ">


                    {/*       */}
                    <div className="h-20  inline-flex w-12 my-8 justify-content-center aligm-items-center p-0 gap-0 border-round">

                        {/* Filtrar POR <- Lado esquerdo */}

                        <div className="flex-auto flex-wrap bg-white shadow-gray-400 shadow-md h-screen p-2  rounded-md  justify-content-center  flex-column relative mr-8 pr-8">

                            <h1 className="font-bold text-gray-600">Filtrar por:</h1>

                            <hr className="relative flex mt-2 w-36  border-round" />



                        {/* DIV DOS CHECKBOXES */}
                        
                            <form action="checkbox" className="flex-column flex-auto   pl-2 pt-5 ">

                                <div className="flex-column m-3 flex-auto  ">
                                    <h1 className="font-bold text-gray-600">Marca</h1>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125  mr-1accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1" className="">Adidas</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Nike</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Balenciaga</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1accent-pink-500 scale-125 mr-1 "></input>
                                        <label for="city1">Pulma</label>
                                    </div>
                                </div>
                            </form>
                            
           

                            <form action="checkbox" className="flex-column aligm-items-center  justify-content-start   pl-2 pt-5">

                                <div className="flex-column m-3  ">
                                    <h1 className="font-bold text-gray-600">Categoria</h1>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1 "></input>
                                        <label for="city1">Esporte e Lazer</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Casual</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Ultilitário</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Corrida</label>
                                    </div>


                                </div>
                            </form>
                            <form action="checkbox" className="flex-column aligm-items-center justify-content-start   pl-2 pt-5">

                                <div className="flex-column m-3  ">
                                    <h1 className=" font-bold text-gray-600">Gênero</h1>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label  for="city1">Masculino</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Feminino</label>
                                    </div>
                                    <div class="field-checkbox">
                                        <input type="checkbox" className="accent-pink-500 scale-125 mr-1"></input>
                                        <label for="city1">Unisex</label>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>

                    {/* FIM DO CARD DE FILTROS A ESQUERDA */}


                    {/* LISTA DE PRODUTOS */}

                    <div class=" relative left-64 rounded top-8  grid  grid-flow-col gap-24 ">
                        
                        {/* grid 01 */}
                        
                        <div className=" ">
                            <div className="  w-40 h-40 mb-24">
                                <Link to={"/DetalhesDoProduto"}>        <Produto />
                                </Link>
                            </div><div className=" w-40 h-40 mb-24">
                                <Link to={"/DetalhesDoProduto"}>  <Produto />
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
                            </div><div className=" w-40 h-40 mb-24">
                                <Link to={"/DetalhesDoProduto"}>  <Produto />
                                </Link>
                            </div><div className=" w-40 h-40 mb-24">
                                <Link to={"/DetalhesDoProduto"}>  <Produto />
                                </Link>
                            </div>
                        </div>
                    </div>
                     {/* fim da lista de produtos */}



                </div>

            </section>
        </>
    );
}

export default ProductListing;