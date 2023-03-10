import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableGrades from "./TableGrades";

const Listanotas = () => {
  const [arrStudentgrades, setarrStudentgrades] = useState([]);
  const { usuarioid, claseid, asignaturaid } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/estudiantes/${usuarioid}/${claseid}/${asignaturaid}`);
        setarrStudentgrades(res.data);
      } catch (error) {
        console.error(error);
        setarrStudentgrades([]);
      }
    };
    fetchData();
  }, [usuarioid, claseid, asignaturaid]);

  return (
    <div className="container">
      {arrStudentgrades.length > 0 && (
        <>
          <Link to={`/dashboard/${usuarioid}/${claseid}`}>
            <button className="button"> <i class="iArrow_Left iMedium"></i> Back to {arrStudentgrades[0].clase}</button>
          </Link>

          <div className="grade-container">
            <figure className="figure_grade">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </figure>
            <p className="text-24">{arrStudentgrades[0].asignatura}</p>
          </div>
        </>
      )}
      <div className="table-app">
        <table>
          <tr>
            <th> Name & Surname</th>
            <th> Nota</th>
            <th></th>
          </tr>
          {arrStudentgrades.map((studentgrade) => (
            <TableGrades {...studentgrade} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Listanotas;
