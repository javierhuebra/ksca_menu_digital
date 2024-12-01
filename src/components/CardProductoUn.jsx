const CardProductoUn = ({
    children,
    imagen,
    descripcion,
    titulo }) => {
    return (
        <div className="border-[3px] border-accent bg-primary  rounded-lg flex flex-col p-1 mb-1">
            <div className="flex h-32">
                <div className="w-32  mr-1">
                    <img src={imagen} alt="producto" className="w-full rounded-lg" />
                </div>
                <div className="flex-1  flex flex-col">
                    <div className="">
                        <p className="text-xl font-bold underline underline-offset-2">{titulo}</p>
                    </div>
                    <div className=" flex-1 flex flex-col">
                        <div className=" w-full h-full flex flex-col">
                            <div className="flex-1">
                                <p className="text">{descripcion}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-accent text-right pl-1 text-white mt-1">
                {children}

            </div>

        </div>
    );
}

export default CardProductoUn;
