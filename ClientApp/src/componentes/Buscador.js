import { useState } from "react"
import { Input } from "reactstrap"

const searchModel = {
    search: ""
}


const Buscador = ({ pullEmployees }) => {

    const [employee, setEmployee] = useState(searchModel);

    const updateField = (e) => {

        setEmployee(
            {
                ...employee,
                [e.target.name]: e.target.value

            }
        )

        pullEmployees(e.target.value)

    }


    return (

        <input
            className="search"
            name="search"
            placeholder="Búsqueda por nombre..."
            type="search"
            onChange={(e) => updateField(e)} value={employee.search}
        />

    )

}

export default Buscador