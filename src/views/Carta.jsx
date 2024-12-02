import CardProductoDoc from "../components/CardProductoDoc";
import Seccion from "../components/Seccion";
import SubSeccion from "../components/SubSeccion";
import { FaUmbrellaBeach } from "react-icons/fa6";
import imgChurros from '../assets/churros.png'
import imgDonas from '../assets/donas2.png'
import imgToprtaFritas from '../assets/tortafritas.png'
import imgRaspaditas from '../assets/raspaditas.png'
import CardRelleno from "../components/CardRelleno";
import { PiCoffeeFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
import CardProductoUn from "../components/CardProductoUn";
import imgCafeConLeche from '../assets/cafeconleche.png'
import imgChocolate from '../assets/choco.png'
import jugoNaranja from '../assets/jugoNaranja.png'
import { FaGrinStars } from "react-icons/fa";
import imgPromo1 from '../assets/promo1.png'
import { MdTouchApp } from "react-icons/md";
import imgSubmarino from '../assets/submarino.png'
import imgPromo2 from '../assets/promo2.png'
import imgChocolatada from '../assets/chocolatada.png'
const Carta = () => {
    return (
        <div className="bg-white flex-1">
             <Seccion tituloSeccion={'Rellenos'}
                icono={<MdTouchApp />}
                >
                    <CardRelleno
                        titulo={'Dulce de Leche'}
                        descripcion={'Dulce de leche clásico.'}
                    />
                    <CardRelleno
                        titulo={'Dulce de Frambuesa'}
                        descripcion={'Dulce de frambuesas de estación.'}
                    />
                    <CardRelleno
                        titulo={'Manzana y Canela'}
                        descripcion={'Receta de la abuela.'}
                    />
                    <CardRelleno
                        titulo={'Dulce de Membrillo'}
                        descripcion={'Dulce de Membrillo de la chacra.'}
                    />
                    <CardRelleno
                        titulo={'Marroc'}
                        descripcion={'Relleno de crema de marroc.'}
                    />
                    <CardRelleno
                        titulo={'Nutella'}
                        descripcion={'Crema de avellanas con chocolate'}
                    />
                    <CardRelleno
                        titulo={'Roquefort'}
                        descripcion={'Queso roquefort fundido.'}
                    />
                    <CardRelleno
                        titulo={'Cheddar con Albahaca'}
                        descripcion={'Queso cheddar fundido con hojas de albahaca fresca.'}
                    />
                </Seccion>
            <Seccion tituloSeccion={'Promociones'}
                icono={<FaGrinStars />}
            >
                <CardProductoUn
                    
                    tipoVenta={'as'}
                    imagen={imgPromo1}
                    descripcion={'Café + 2 churros.'}
                    titulo={'Café con Churros'}
                >
                    <p className="text-sm mr-1">Promo Café con Leche: <span className="font-bold">$ 0.000,00</span></p>
                    <p className="text-sm mr-1">Promo Café Solo: <span className="font-bold">$ 0.000,00</span></p>
                </CardProductoUn>
                <CardProductoUn
                    
                    tipoVenta={'as'}
                    imagen={imgPromo2}
                    descripcion={'Submarino + 2 churros.'}
                    titulo={'Submarino con Churros'}
                >
                    <p className="text-sm mr-1">Promo: <span className="font-bold">$ 0.000,00</span></p>
                    
                </CardProductoUn>
            </Seccion>
            <Seccion tituloSeccion={'Comestibles'}
                icono={<PiBowlFoodFill />}
            >

                <SubSeccion tituloSubSeccion={"Clásicos de K'scaritas"}>
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'0.000,00'}
                        medPrice={'0.000,00'}
                        docPrice={'00.000,00'}
                        imagen={imgChurros}
                        descripcion={'Churros clásicos de playa con variedades de relleno.'}
                        titulo={'Churros'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'0.000,00'}
                        medPrice={'0.000,00'}
                        docPrice={'00.000,00'}
                        imagen={imgDonas}
                        descripcion={'Donas clásicas de playa con variedades de relleno.'}
                        titulo={'Donas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'0.000,00'}
                        medPrice={'0.000,00'}
                        docPrice={'00.000,00'}
                        imagen={imgToprtaFritas}
                        descripcion={'Tortas fritas clásicas de playa con variedades de relleno.'}
                        titulo={'Tortas Fritas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={false}
                        uniPrice={'0.000,00'}
                        medPrice={'0.000,00'}
                        docPrice={'00.000,00'}
                        imagen={imgRaspaditas}
                        descripcion={'Tortas clásicas de la zona cuyana argentina.'}
                        titulo={'Tortitas Raspaditas'}
                    />
                </SubSeccion>
            </Seccion>
            <Seccion tituloSeccion={'Bebidas'}
                icono={<PiCoffeeFill />}
            >
                <SubSeccion tituloSubSeccion={'Cafetería'}>


                    <CardProductoUn
                        
                        tipoVenta={'as'}
                        imagen={imgCafeConLeche}
                        descripcion={'Café con leche clásico.'}
                        titulo={'Café con Leche'}
                    >
                        <p className="text-sm mr-1">Chico: <span className="font-bold">$ 0.000,00</span></p>
                        <p className="text-sm mr-1">Grande: <span className="font-bold">$ 0.000,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn
                        
                        tipoVenta={'as'}
                        imagen={imgSubmarino}
                        descripcion={'Leche caliente con una barra de chocolate para fundir.'}
                        titulo={'Submarino'}
                    >
                        
                        <p className="text-sm mr-1">Vaso 400cc: <span className="font-bold">$ 0.000,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={imgChocolate}
                        descripcion={'Taza de chocolate para churros.'}
                        titulo={'Taza de Chocolate'}
                    >

                        <p className="text-sm mr-1">Taza Mediana: <span className="font-bold">$ 0.000,00</span></p>
                    </CardProductoUn>
                </SubSeccion>

                <SubSeccion tituloSubSeccion={'Bebidas Frías'}>
                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={jugoNaranja}
                        descripcion={'Jugo exprimido de naranja.'}
                        titulo={'Exprimido de Naranja'}
                    >

                        <p className="text-sm mr-1">Vaso 500cc: <span className="font-bold">$ 0.000,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={imgChocolatada}
                        descripcion={'Leche fria con chocolate.'}
                        titulo={'Chocolatada'}
                    >

                        <p className="text-sm mr-1">Vaso 500cc: <span className="font-bold">$ 0.000,00</span></p>
                    </CardProductoUn>

                </SubSeccion>
            </Seccion>
        </div>
    );
}

export default Carta;