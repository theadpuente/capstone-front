const Navbardrop = ({ usuario_nombre, usuario_email, usuario_usuarioscol }) => {





    return (
        <div className="navbardrop">


            <div className="navdrop-content-1">
                <p className="text-16"> {usuario_nombre} </p>
                <p className="text-14"> {usuario_email} </p>
            </div>


            <button className="icon-button"><i className="iSetting iMedium"></i></button>

        </div>

    )


}


export default Navbardrop;