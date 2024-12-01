import logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaGoogle } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Inicio = () => {
    return (
        <div className="flex-1 flex flex-col bg-white">

            <div className='justify-center items-center flex'>
                <img src={logo} alt="" className='h-[130px] drop-shadow-lg' />
            </div>
            <div className='mx-2 flex flex-col  flex-1 '>
                <p className=' text-accent text-xl text-center font-bold'>
                    ¡Bienvenidos a K'scaritas, el hogar de los panificados de playa más ricos y originales!
                </p>
                <br />
                <p className=' text-xl text-accent text-center fontbo'>
                    En este menú digital encontrará todas nuestras opciones comestibles y bebidas.
                </p>
                <br />
                <p className=' text-xl text-accent text-center'>
                    En caso de necesitar mas información puede visitar
                    <a href="https://kscaritas.com/" target='_blank' className='text-primary underline underline-offset-2'> nuestra web</a>.
                </p>
                <div className=' flex-1 flex  flex-col'>

                    <Link to='/carta' className='text-center bg-primary px-4 py-4 border-[3px] border-accent rounded-lg text-2xl mt-6 text-accent shadow-lg font-bold'>Ir al Menú</Link>

                    <div className='mb-2 flex justify-between items-center mt-6'>
                        <div className='bg-red-700 rounded-lg px-4 py-2 text-white font-bold shadow-lg flex items-center justify-start'>
                            <p className='mr-1'>Dejar una reseña </p><FaGoogle />
                        </div>
                        <div>

                            <FaInstagram className='text-4xl text-accent' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
