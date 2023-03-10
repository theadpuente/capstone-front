import { Link } from "react-router-dom";

const TableGrades = ({ id, estudiante, nota }) => {

    return (


      
            <tr>
                <td>
                    {estudiante}
                </td>
                <td><p className="badge"> {nota} </p>  </td>
                <td> <Link to={`/student-edit/${id}`}> <button className="button"> Editar el puto niño</button> </Link></td>
            </tr>

   

    )
}

export default TableGrades;