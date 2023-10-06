import { useState } from "react"


const Form = ({ saveEmployee }) => {

    const [employee, setEmployee] = useState({
        documento: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        direccion: "",
        genero: ""

    })

    const [notValid, setNotValid] = useState(false);

    const setEmployeeHandler = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {

        e.preventDefault()

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regex.test(employee.email)) {

            saveEmployee(employee);
            e.currentTarget.reset();

        } else {

            setNotValid(!notValid);

        }


    }


    return (

        <div>

            

            {notValid ?

                <div>
                    NO SE GUARDÓ UN CARAJO
                </div>

                : 

                <div>

                    <form onSubmit={(e) => submitHandler(e)}>

                        <div>
                            <label htmlFor="documento">Documento</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="documento" type="text" required placeholder="Documento" />
                        </div>

                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="nombre" maxLength="50" type="text" required placeholder="Nombre" />

                        </div>

                        <div>
                            <label htmlFor="Apellidos">Apellidos</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="apellidos" maxLength="50" type="text" required placeholder="Apellidos" />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="telefono">Teléfono</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="telefono" maxLength="50" type="tel" placeholder="Teléfono" />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="email">E-mail</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="email" maxLength="50" type="email" required placeholder="E-mail" />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="direccion">Dirección</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="direccion" maxLength="50" type="text" required placeholder="Dirección" />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="genero">Género</label>
                            <select onChange={(e) => setEmployeeHandler(e)} name="genero" maxLength="1">
                                <optgroup label="M">
                                    <option value="M" label="M">M</option>
                                    <option value="F" label="F">F</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="submit-form" className="cursor">
                                Guardar empleado
                            </label>
                        </div>
                        <input type="submit" id="submit-form" className="hidden" />

                    </form>

                </div>

            }

        </div>


    )
}

export default Form