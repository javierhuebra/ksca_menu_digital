const CardRelleno = ({titulo, descripcion}) => {
    return ( 
        <div className="border-[3px] border-accent bg-primary rounded-lg p-1 mb-1">
            <p className="font-bold underline underline-offset-2">{titulo}</p>
            <p>{descripcion}</p>
        </div>
     );
}
 
export default CardRelleno;