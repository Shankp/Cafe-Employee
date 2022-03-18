using System;
using System.Collections.Generic;
using System.Text;
using CafeManager.Common.Models;

namespace CafeManagerServer.DB
{
    public interface IEmployeeStore
    {
        List<Employee> GetEmployee(string cafeId);

        int CreateEmployee(Employee employee);

        bool UpdateEmployee(Employee employee);

        bool DeleteEmployee(string employeeId);
    }
}
