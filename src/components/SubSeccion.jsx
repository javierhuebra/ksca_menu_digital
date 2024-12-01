const SubSeccion = ({ children, tituloSubSeccion, icono }) => {
    return (
        <div className="p-1 mb-5">
            <div className="items-center flex border-b-[2px] border-accent mb-1">
                <p className="text-2xl mr-1 text-accent">

                    {icono}
                </p>
                <p className="font-bold text-accent  text-xl ml-1">{tituloSubSeccion}</p>
            </div>
            {children}
        </div>
    );
}

export default SubSeccion;
