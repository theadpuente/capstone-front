import Navbardrop from "./UI/NavBarDrop";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBarInfo from "./UI/NavBarInfo";
import { useParams } from "react-router-dom";
import logo from './UI/logo.png'

const NavbarTop = () => {

    const [arrClass, setClass] = useState([]);
    const { usuarioid, claseid } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/clases/${usuarioid}/${claseid}`);
                setClass(res.data);
            } catch (error) {
                console.error(error);
                setClass([]);
            }
        };
        fetchData();
    }, [usuarioid, claseid]);



    return (

        <div className="navbar">

            <div className="navbar-1">

                <figure className="navbar-logo">
                    <img src={logo} alt="" />
                </figure>
                {arrClass.map(clas => (
                    <NavBarInfo {...clas} />
                ))}
            </div>
            {arrClass.map(clas => (
                <Navbardrop {...clas} />
            ))}

        </div>







    )
}

export default NavbarTop;