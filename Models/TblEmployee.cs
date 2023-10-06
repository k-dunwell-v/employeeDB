using System;
using System.Collections.Generic;

namespace PruebaDJ.Models;

public partial class TblEmployee
{
    public int EmployeeId { get; set; }

    public int? Documento { get; set; }

    public string? Nombre { get; set; }

    public string? Apellidos { get; set; }

    public string? Telefono { get; set; }

    public string? Email { get; set; }

    public string? Direccion { get; set; }

    public string? Genero { get; set; }
}
