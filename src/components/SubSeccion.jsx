const SubSeccion = ({ children, tituloSubSeccion, }) => {
    return (
        <div className=" mb-5">
            <div className="items-center flex border-b-[4px]  border-accent mb-1">
                <div className="bg-accent px-3 ml-2 rounded-t-xl">
                    <p className="font-bold text-white  text-xl ">{tituloSubSeccion}</p>
                </div>

            </div>
            {children}
        </div>
    );
}

export default SubSeccion;
