using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CafeManager.Common.Models;
using CafeManagerServer.DB;

namespace CafeManagerServer.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeStore _employeeStore;
        public EmployeeService(IEmployeeStore employeeStore)
        {
            _employeeStore = employeeStore;
        }
        public List<Employee> GetEmployee(string cafeName)
        {
            return _employeeStore.GetEmployee(cafeName);
        }

        public bool CreateEmployee(Employee employee)
        {
            return _employeeStore.CreateEmployee(employee);
        }

        public bool UpdateEmployee(Employee employee)
        {
            return _employeeStore.UpdateEmployee(employee);
        }

        public bool DeleteEmployee(string employeeId)
        {
            return _employeeStore.DeleteEmployee(employeeId);
        }
    }
}
