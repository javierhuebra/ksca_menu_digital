import CardProductoDoc from "../components/CardProductoDoc";
import Seccion from "../components/Seccion";
import SubSeccion from "../components/SubSeccion";
import { FaUmbrellaBeach } from "react-icons/fa6";
import imgChurros from '../assets/churros.png'
import imgDonasSimples from '../assets/donas.png'
import imgDonas from '../assets/donas2.png'
import imgToprtaFritas from '../assets/tortafritas.png'
import imgRaspaditas from '../assets/raspaditas.png'
import CardRelleno from "../components/CardRelleno";
import { PiCoffeeFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
import CardProductoUn from "../components/CardProductoUn";
import imgCafeConLeche from '../assets/cafeconleche.png'
import imgCafe from '../assets/cafe.png'
import imgChocolate from '../assets/chocolatecaliente.png'
import jugoNaranja from '../assets/jugoNaranja.png'
import { FaGrinStars } from "react-icons/fa";
import imgPromo1 from '../assets/promo1.png'
import { MdTouchApp } from "react-icons/md";
import imgSubmarino from '../assets/submarino.png'
import imgCappuccino from '../assets/capuccino.png'
import imgPromo2 from '../assets/promo2.png'
import imgChocolatada from '../assets/chocolatada.png'
import imgMedialuna from '../assets/medialuna.png'
import imgExprimidos from '../assets/exprimidos.png'
import imgLicuados from '../assets/licuados.png'
import imgEnsaladaFrutas from '../assets/frutas.png'
import imgInfusiones from '../assets/infusion.png'
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
                    descripcion={'Café/Café con leche + 2 unidades.'}
                    titulo={'Promo 1'}
                >
                    <p className="text-sm mr-1"><span className="font-bold">$ 4.500,00</span></p>
                </CardProductoUn>
                <CardProductoUn

                    tipoVenta={'as'}
                    imagen={imgPromo2}
                    descripcion={'Submarino/Cappuccino + 2 unidades.'}
                    titulo={'Promo 2'}
                >
                    <p className="text-sm mr-1"><span className="font-bold">$ 6.000,00</span></p>

                </CardProductoUn>
            </Seccion>
            <Seccion tituloSeccion={'Especialidades'}
                icono={<PiBowlFoodFill />}
            >

                <SubSeccion tituloSubSeccion={"Clásicos de K'scaritas"}>
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'1.000,00'}
                        medPrice={'5.000,00'}
                        docPrice={'10.000,00'}
                        imagen={imgChurros}
                        descripcion={'Churros clásicos de playa con variedades de relleno.'}
                        titulo={'Churros'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'1.000,00'}
                        medPrice={'5.000,00'}
                        docPrice={'10.000,00'}
                        imagen={imgDonasSimples}
                        descripcion={'Donas clásicas de playa.'}
                        titulo={'Donas Simples'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'2.500,00'}
                        medPrice={'-'}
                        docPrice={'-'}
                        imagen={imgDonas}
                        descripcion={'Donas clásicas de playa con variedades de relleno.'}
                        titulo={'Donas Rellenas/Bañadas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'1.000,00'}
                        medPrice={'5.000,00'}
                        docPrice={'10.000,00'}
                        imagen={imgToprtaFritas}
                        descripcion={'Tortas fritas clásicas de playa con variedades de relleno.'}
                        titulo={'Tortas Fritas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={false}
                        uniPrice={'1.000,00'}
                        medPrice={'5.000,00'}
                        docPrice={'10.000,00'}
                        imagen={imgRaspaditas}
                        descripcion={'Tortas clásicas de la zona cuyana argentina.'}
                        titulo={'Tortitas Raspaditas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={false}
                        uniPrice={'1.000,00'}
                        medPrice={'5.000,00'}
                        docPrice={'10.000,00'}
                        imagen={imgMedialuna}
                        descripcion={'Medialunas de manteca, dulces.'}
                        titulo={'Medialunas'}
                    />
                </SubSeccion>
            </Seccion>
            <Seccion tituloSeccion={'Cafetería'}
                icono={<PiCoffeeFill />}
            >
                <SubSeccion tituloSubSeccion={'Calientes'}>
                    <CardProductoUn

                        imagen={imgCafe}
                        descripcion={'Café - Cortado - Lágrima.'}
                        titulo={'Café'}
                    >
                        <p className="text-sm mr-1">Chico: <span className="font-bold">$ 2.000,00</span></p>
                        <p className="text-sm mr-1">Mediano: <span className="font-bold">$ 2.500,00</span></p>
                        <p className="text-sm mr-1">Grande: <span className="font-bold">$ 3.000,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn

                        imagen={imgCafeConLeche}
                        descripcion={'Café con leche clásico.'}
                        titulo={'Café con Leche'}
                    >
                        <p className="text-sm mr-1">Chico: <span className="font-bold">$ 2.000,00</span></p>
                        <p className="text-sm mr-1">Mediano: <span className="font-bold">$ 2.500,00</span></p>
                        <p className="text-sm mr-1">Grande: <span className="font-bold">$ 3.000,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn

                        imagen={imgInfusiones}
                        descripcion={'Té / Mate cocido.'}
                        titulo={'Infusiones'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 2.500,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn


                        imagen={imgSubmarino}
                        descripcion={'Leche caliente con una barra de chocolate para fundir.'}
                        titulo={'Submarino'}
                    >

                        <p className="text-sm mr-1"><span className="font-bold">$ 4.500,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn


                        imagen={imgCappuccino}
                        descripcion={'Leche caliente con café y chocolate.'}
                        titulo={'Cappucciono'}
                    >

                        <p className="text-sm mr-1"><span className="font-bold">$ 4.500,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn


                        imagen={imgChocolate}
                        descripcion={'Leche con chocolate caliente.'}
                        titulo={'Chocolate Caliente'}
                    >

                        <p className="text-sm mr-1"><span className="font-bold">$ 3.500,00</span></p>
                    </CardProductoUn>
                </SubSeccion>

                <SubSeccion tituloSubSeccion={'Fríos'}>
                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={imgLicuados}
                        descripcion={'Licuado de frutas natural.'}
                        titulo={'Licuados'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ -</span></p>
                    </CardProductoUn>
                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={jugoNaranja}
                        descripcion={'Jugo exprimido de naranja.'}
                        titulo={'Exprimido de Naranja'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ -</span></p>
                    </CardProductoUn>
                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={imgExprimidos}
                        descripcion={'Jugo de frutas natural exprimido.'}
                        titulo={'Exprimidos Varios'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ -</span></p>
                    </CardProductoUn>
                    <CardProductoUn
                        price={'1.000,00'}
                        tipoVenta={'as'}
                        imagen={imgEnsaladaFrutas}
                        descripcion={'Copa de frutas trozadas.'}
                        titulo={'Ensalada de frutas'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ -</span></p>
                    </CardProductoUn>
                    

                </SubSeccion>
            </Seccion>
        </div>
    );
}

export default Carta;