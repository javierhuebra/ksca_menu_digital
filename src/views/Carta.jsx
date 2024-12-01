import CardProductoDoc from "../components/CardProductoDoc";
import Seccion from "../components/Seccion";
import SubSeccion from "../components/SubSeccion";
import { FaUmbrellaBeach } from "react-icons/fa6";
import imgChurros from '../assets/churros.png'
import imgDonas from '../assets/donas.png'
import imgToprtaFritas from '../assets/tortafritas.png'
import imgRaspaditas from '../assets/raspaditas.png'
import CardRelleno from "../components/CardRelleno";
import { PiCoffeeFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
const Carta = () => {
    return (
        <div className="bg-white flex-1">
            <Seccion tituloSeccion={'Comestibles'}
                icono={<PiBowlFoodFill />}
            >
                <SubSeccion tituloSubSeccion={'Rellenos Posibles'}
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
                            descripcion={'Dulce de manzana con una pizca de canela en polvo.'}
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
                            descripcion={'Queso cheddar fundido con una pizca de albahaca fresca.'}
                        />
                </SubSeccion>

                <SubSeccion tituloSubSeccion={'Clásicos de Las Grutas'}
                    
                >
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'1.000,00'}
                        medPrice={'6.000,00'}
                        docPrice={'12.000,00'}
                        imagen={imgChurros}
                        descripcion={'Churros clásicos de playa con variedades de relleno.'}
                        titulo={'Churros'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'1.000,00'}
                        medPrice={'6.000,00'}
                        docPrice={'12.000,00'}
                        imagen={imgDonas}
                        descripcion={'Donas clásicas de playa con variedades de relleno, rebosadas en azúcar.'}
                        titulo={'Donas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={true}
                        uniPrice={'1.000,00'}
                        medPrice={'6.000,00'}
                        docPrice={'12.000,00'}
                        imagen={imgToprtaFritas}
                        descripcion={'Tortas fritas clásicas de playa con variedades de relleno.'}
                        titulo={'Tortas Fritas'}
                    />
                    <CardProductoDoc
                        tieneRelleno={false}
                        uniPrice={'1.000,00'}
                        medPrice={'6.000,00'}
                        docPrice={'12.000,00'}
                        imagen={imgRaspaditas}
                        descripcion={'Tortas clásicas de la zona cuyana argentina.'}
                        titulo={'Tortitas Raspaditas'}
                    />
                </SubSeccion>
            </Seccion>
            <Seccion tituloSeccion={'Cafetería'}
                icono={<PiCoffeeFill />}
            >

            </Seccion>
        </div>
    );
}

export default Carta;