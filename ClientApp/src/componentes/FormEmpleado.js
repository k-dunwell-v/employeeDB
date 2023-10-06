import { useState  } from "react"


const FormEmpleado = ({ saveEmployee }) => {

    const [employee, setEmployee] = useState({
        documento: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        direccion: "",
        genero: "M"

    })

    const [notValid, setNotValid] = useState(false);

    // Va recopilando los datos ingresados en el formulario.
    const setEmployeeHandler = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    // Se encarga de enviar la información necesaria para guardar el nuevo empleado, además de contener validación de e-mail.
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
                    <p className="errorText">¡Ups!</p>

                    <p className="simpleText">Ha de haber algo mal con tu correo... ¿Por qué no lo intentas otra vez?</p>
                </div>

                :

                <div className="formDiv">

                    <form onSubmit={(e) => submitHandler(e)}>

                        <div className="divField">
                            <label htmlFor="documento">Documento</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="documento" type="text" pattern="[0-9]*" required placeholder="Documento (¡númerico!)" />
                        </div>

                        <div className="divField">
                            <label htmlFor="genero">Género</label>
                            <select onChange={(e) => setEmployeeHandler(e)} name="genero">
                                <option selected value="M" label="M">M</option>
                                <option value="F" label="F">F</option>

                            </select>
                        </div>

                        <div className="divField">
                            <label htmlFor="nombre">Nombre</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="nombre" maxLength="50" type="text" required placeholder="Nombre" />

                        </div>

                        <div className="divField">
                            <label htmlFor="Apellidos">Apellidos</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="apellidos" maxLength="50" type="text" required placeholder="Apellidos" />
                        </div>

                        <div className="divField">
                            <label htmlFor="telefono">Teléfono</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="telefono" maxLength="50" type="tel" placeholder="Teléfono" />
                        </div>

                        <div className="divField">
                            <label htmlFor="email">E-mail</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="email" maxLength="50" type="email" required placeholder="E-mail" />
                        </div>

                        <div className="divField adressField">
                            <label htmlFor="direccion">Dirección</label>
                            <input onChange={(e) => setEmployeeHandler(e)} name="direccion" maxLength="50" type="text" required placeholder="Dirección" />
                        </div>

                        <label htmlFor="submit-form" className="">
                            Guardar empleado
                        </label>
                        <input type="submit" id="submit-form" className="submitBut" value="Guardar empleado"/>

                    </form>

                </div>

            }

        </div>


    )
}

export default FormEmpleado