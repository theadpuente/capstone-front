import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CrearAsignatura = () => {
    const { register, handleSubmit } = useForm();
    const { claseid } = useParams();
    const create = async (values) => {
        try {
            const res = await axios.post(`http://localhost:3000/api/asignaturas/${claseid}`, values);
            if (res.data.fatal) {
                Swal.fire({
                    title: 'Error!',
                    text: res.data.fatal,
                    icon: 'error'
                });
            } else {
                await Swal.fire({
                    title: 'Correcto!',
                    text: 'Has creado la asignatura genial',
                    icon: 'success'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error'
            });
        }
    };

    return (
        <div className="container">
            <Link to={`/dashboard/${claseid}`}>
                <button className="button"> <i class="iArrow_Left iMedium"></i> Back to Dashboard</button>
            </Link>
            <form onSubmit={handleSubmit(create)}>
                <div className="input-container">
                    <label> Name & Surname</label>
                    <input className="input" type="text" placeholder=""  {...register('nombre')} />
                </div>
                <input className="button-2" value="Crear Asignatura" type="submit" />
            </form>
        </div>
    );
};


export default CrearAsignatura;
