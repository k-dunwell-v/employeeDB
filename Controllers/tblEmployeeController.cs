using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using PruebaDJ.Models;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace PruebaDJ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class tblEmployeeController : ControllerBase
    {

        private readonly TalataaContext _dbcontext;

        public tblEmployeeController(TalataaContext context)
        {

            _dbcontext = context;
        
        }

        // 2. 1. Inserción de un “Employee”.

        [HttpPost]
        [Route("Guardar")]

        public async Task<IActionResult> Guardar([FromBody] TblEmployee newEmployee)
        {
            try
            {
                if (await IsValidEmailAsync(newEmployee.Email))
                {
                    await _dbcontext.TblEmployees.AddAsync(newEmployee);
                    await _dbcontext.SaveChangesAsync();

                    return StatusCode(StatusCodes.Status200OK, "OK");
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, "NO");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }

        }

        // Validación de E-mail.
        public static async Task<bool> IsValidEmailAsync(string email)
        {
            string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

            return await Task.Run(() => Regex.IsMatch(email, pattern, RegexOptions.IgnoreCase));
        }



        // 2.2. Consulta de los “Employees”.

            // Consulta simple, retorna una lista.

        [HttpGet]
        [Route("Buscar")]

        public async Task<IActionResult> Buscar()
        {

            try
            {
                List<TblEmployee> employees = await _dbcontext.TblEmployees.OrderByDescending(c => c.EmployeeId).ToListAsync();

                return StatusCode(StatusCodes.Status200OK, employees);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }


        }

            // Consulta con filtro.

        [HttpGet]
        [Route("Buscar/{employeeName?}")]
        public async Task<IActionResult> Buscar(string employeeName)
        {
            try
            {
                if (!string.IsNullOrEmpty(employeeName))
                {
                    List<TblEmployee> employees = await _dbcontext.TblEmployees
                        .Where(x => x.Nombre.ToLower().Contains(employeeName.ToLower()) || x.Apellidos.ToLower().Contains(employeeName.ToLower()))
                        .ToListAsync();

                    return StatusCode(StatusCodes.Status200OK, employees);
                }
                else
                {
                    List<TblEmployee> employees = await _dbcontext.TblEmployees.OrderByDescending(c => c.EmployeeId).ToListAsync();
                    return StatusCode(StatusCodes.Status200OK, employees);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }


    }
}
