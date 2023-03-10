import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardSubject from "./CardSubject";

const Listaasiganturas = () => {


    const [arrSubjects, setArrSubjects] = useState([]);
    const { usuarioid, claseid } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/asignaturas/${usuarioid}/${claseid}`);
                setArrSubjects(res.data);
            } catch (error) {
                console.error(error);
                setArrSubjects([]);
            }
        };
        fetchData();
    }, [usuarioid, claseid]);



    return (

        <div className="container">
            <div className="header-app">
                <div>
                    <div>
                        <p className="text-20"> Subjects</p>
                        <p className="badge"> {arrSubjects.length}</p>
                    </div>
                    <p className="text-14"> View full student List </p>
                </div>
                <Link to={`/dashboard/${usuarioid}/${claseid}/crearasignatura`}>
                    <button className="button"> Create subject</button>
                </Link>

            </div>
            <div className="card-container">

                {arrSubjects.map(subject => (
                    <Link to={`/dashboard/${usuarioid}/${claseid}/${subject.id}`}>
                        <CardSubject {...subject} />
                    </Link>
                ))}

            </div>

        </div>


    )

}


export default Listaasiganturas;