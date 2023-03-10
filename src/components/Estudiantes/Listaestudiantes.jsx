import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableStudents from "./TableStudent";

const Listaestudiantes = () => {
    const [arrStudents, setArrStudents] = useState([]);
    const { usuarioid, claseid } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/estudiantes/${usuarioid}/${claseid}`);
                setArrStudents(res.data);
            } catch (error) {
                console.error(error);
                setArrStudents([]);
            }
        };
        fetchData();
    }, [usuarioid, claseid]);

    return (

        <div className="container">
            <div className="header-app">
                <div>
                    <div>
                        <p className="text-20"> Estudiantes</p>
                        <p className="badge"> {arrStudents.length}</p>
                    </div>
                    <p className="text-14"> View full student List</p>
                </div>


                <button className="button"> Create student link</button>


            </div>
            <div className="table-app">

                <table>
                    <tr>
                        <th> Name & Surname</th>
                        <th> Birth Date</th>
                        <th> Parent</th>
                        <th> Parent E-mail</th>
                        <th> </th>
                    </tr>
                
                    {arrStudents.map((student) => (
                        <TableStudents {...student} />
                    ))}
                 </table>
            </div>
        </div>
    )


}

export default Listaestudiantes;