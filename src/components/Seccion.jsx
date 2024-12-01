const Seccion = ({children, tituloSeccion, icono}) => {
    return ( 
        <div className="mt-1">
            <div className="  h-16 items-center flex justify-center mb-1">
                <p className=" text-secondary text-2xl">{icono}</p>
                <p className="font-bold text-secondary text-2xl ml-1">{tituloSeccion}</p>
            </div>
            {children}
        </div>
     );
}
 
export default Seccion;