import { Link } from "react-router-dom";

const TableStudents = ({ id, nombre, fnacimiento, padre, email, }) => {

    return (


        
         
            <tr>
                <td> {nombre} </td>
                <td> {fnacimiento}</td>
                <td><p className="badge"> {padre} </p>  </td>
                <td> {email} </td>
                <td> <Link to={`/student-edit/${id}`}> <button className="icon-button"><i className="iEdit iMedium"></i></button> </Link></td>
            </tr>
       


    )
}

export default TableStudents;