const NavBarInfo = ({ nombre, educ, num_estudiantes }) => {


    return (

        <div className="navbardrop">

            <div className="navdrop-content-1">
                <p className="text-16"> {nombre} </p>
                <p className="text-14"> {educ} </p>
            </div>

            <p className="badge"> {num_estudiantes} students</p>

            <button className="icon-button"><i className="iMoreVert iMedium"></i></button>
        </div>
    )


}


export default NavBarInfo;