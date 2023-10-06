
const TablaEmpleados = ({ info }) => {

    return (

        <div className="tableDiv">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Teléfono</th>
                        <th>E-mail</th>
                        <th>Dirección</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        info.map((item) => (

                            <tr className="tabContent" key={item.employeeId}>
                                <td>{item.employeeId}</td>
                                <td>{item.documento}</td>
                                <td>{item.nombre}</td>
                                <td>{item.apellidos}</td>
                                <td>{item.telefono}</td>
                                <td>{item.email}</td>
                                <td>{item.direccion}</td>
                                <td>{item.genero}</td>
                            </tr>
                            
                        ))
                        
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TablaEmpleados;