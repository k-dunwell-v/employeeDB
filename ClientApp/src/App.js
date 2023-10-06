//import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaEmpleados from "./componentes/TablaEmpleados"
import { useEffect, useState } from "react"
import FormEmpleado from "./componentes/FormEmpleado"
import Buscador from "./componentes/Buscador"
import './App.css'
import Footer from "./componentes/Footer"


const App = () => {

    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);


    // Trae lista de empleados, sea completa o filtrada.
    const pullEmployees = async (name) => {

        console.log(name)

        const response = await fetch("/api/tblemployee/buscar/" + name);

        if (response.ok) {
            const data = await response.json();
            setEmployees(data);

        } else {
            console.log("ERROR");
        }
    }


    // Trae empleados automaticamente cada que se inicia la página.
    useEffect(() => {

        pullEmployees(" ")

    }, [])

    // Guardar empleados y validación de Documento e E-mail.
    const saveEmployee = async (employee) => {

        const response = await fetch("/api/tblemployee/guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(employee)
        })

        if (response.ok) { 
            const validEmail = await response.text();

            console.log(validEmail)

           if (validEmail === "OK") {
               setShowForm(!showForm);
               pullEmployees(" ");

           }

        }

    }

    return (
        <div className="flexHome">

            <div>
                <h1 className="title">TALATAA EMPLOYEE DB</h1>
            </div>

            <nav>

                <hr></hr>

                <ul>

                    <li>
                        <button className="addEmp" onClick={() => setShowForm(!showForm)}>

                            {showForm ? 

                                <svg width="40px" height="40px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#ABA8A4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                
                                :
                        
                                <svg width="40px" height="40px" viewBox="-3.36 -3.36 22.72 22.72" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.032"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 6 v -1 h -3 v -4 h 3 v -1.972656 c -0.164062 -0.019532 -0.332031 -0.027344 -0.5 -0.027344 z m 4.5 0 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0" fill="#ABA8A4"></path> </g></svg>
                        
                            }

                        </button>
                    </li>

                    <li>
                        {!showForm ? <Buscador pullEmployees={pullEmployees} /> : 

                            <p className="subtitle">Nuevo empleado</p>
                        
                        }
                    </li>

                </ul>

                <hr></hr>

            </nav>

            <main className="mainDiv">

                {showForm ?

                    <FormEmpleado showForm={showForm} setShowForm={setShowForm} saveEmployee={saveEmployee} />

                    : <TablaEmpleados info={employees} />}
                
            </main>

            

            <hr></hr>

            <Footer></Footer>

        </div>

    )
}

export default App;