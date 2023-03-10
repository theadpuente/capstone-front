const Studentsidesheet = ({ student_id, nombre, fnacimiento }) => {

    return (


        <div className="container">
            <div className="input-container">
                <label htmlFor=""> Name & Surname</label>
                <input className="input" type="text" placeholder="" value="{nombre}" />

            </div>
            <div className="input-container">
                <label htmlFor=""> Birth Date</label>
                <input className="input" type="date" value="{fnacimiento}" />
            </div>
            <input className="button-2" type="submit" />
        </div>



    )
}

export default Studentsidesheet;