import Tenis2 from "./img/tenis2.png"

const Produto = ({}) => {
    return ( 
        <>
      
        <div className="rounded-md bg-white shadow-gray-400 shadow-md  px-2 ">
            <div className="flex items-center justify-center relative right-3">
         <img src={Tenis2} className="w-40 h-40  flex justify-center items-center" />
         </div>
            <h6 className="text-gray-700 py-1 text-xs">Tênis</h6>
                            <h4 className="font-bold">Nike Revolution 6</h4>
                        
                        <ul className="align-items-center inline-flex gap-2">
                                <li className="line-through  text-gray-700 ">R$200,00</li><li className="mb-2 font-bold">R$100,00</li>
                        </ul> 
        </div>
       
        </>


     );
}
 
export default Produto;