

const CardSubject = ({ id, nombre }) => {

    return (


        <button className="card">
            <figure>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </figure>
            <p className="text-16"> {nombre}</p>
        </button>


    )
}

export default CardSubject;