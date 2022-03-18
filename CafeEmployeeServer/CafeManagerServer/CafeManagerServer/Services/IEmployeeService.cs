using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CafeManager.Common.Models;


namespace CafeManagerServer.Services
{
    public interface IEmployeeService
    {
        List<Employee> GetEmployee(string cafeId);

        int CreateEmployee(Employee employee);

        bool UpdateEmployee (Employee employee);

        int DeleteEmployee(string employeeId);
    }
}
