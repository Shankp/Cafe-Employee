using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CafeManager.Common.Models;
using CafeManagerServer.Services;

namespace CafeManagerServer.Controllers
{
    [ApiController]
    [Route("api/employee")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        [Route("cafe/{cafeId}")]
        public ActionResult<List<Employee>> GetCafeList(string cafeId) {
            try
            {
                return _employeeService.GetEmployee(cafeId);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }

        [HttpPost]
        [Route("add")]
        public ActionResult<bool> AddEmployee([FromBody] Employee employee)
        {
            try
            {
                var isEmpAdded = _employeeService.CreateEmployee(employee);
                return Ok(isEmpAdded);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }


        [HttpPut]
        [Route("update")]
        public ActionResult<bool> UpdateEmployee([FromBody] Employee employee)
        {
            try
            {
                var isEmployeeUpdated = _employeeService.UpdateEmployee(employee);
                return Ok(isEmployeeUpdated);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }

        [HttpDelete]
        [Route("delete/{empId}")]
        public ActionResult<bool> DeleteCafe(string empId)
        {
            try
            {
                var isDeleted = _employeeService.DeleteEmployee(empId);
                return Ok(isDeleted);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }

    }
}
