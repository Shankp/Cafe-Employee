using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CafeManagerServer.DB.DbCore;
using CafeManagerServer.DB.Mappers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Employee = CafeManager.Common.Models.Employee;

namespace CafeManagerServer.DB
{
    public class EmployeeStore : IEmployeeStore
    {
        private IConfiguration _configuration;

        public EmployeeStore(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<Employee> GetEmployee(string cafeId)
        {
            using var context = new cafemanagerdbContext(_configuration);
            var cafeGuid = new Guid(cafeId);
            var cafeDetail = context.Cafe.FirstOrDefault(c => c.CafeId == cafeGuid.ToByteArray());
            if (!string.IsNullOrEmpty(cafeId))
            {

                var empIdInCafe = context.Cafeemployee.Include(c => c.Employee).Where(c => c.Cafe.CafeId == cafeGuid.ToByteArray()).ToList();
                empIdInCafe.OrderBy(c => c.StartDate);
                return empIdInCafe.Select(c => Mapper.MapEmployeeToDataEmployee(c.Employee, c.StartDate, cafeDetail?.CafeName)).ToList();
            }
            var empIdInCaf = context.Cafeemployee.Include(c => c.Employee).OrderBy(c => c.StartDate).ToList();
            return empIdInCaf.Select(c => Mapper.MapEmployeeToDataEmployee(c.Employee, c.StartDate, cafeDetail?.CafeName)).ToList();
        }

        public bool CreateEmployee(Employee employee)
        {
            using var context = new cafemanagerdbContext(_configuration);
            var employeeEntity = Mapper.MapDataEmployeeToEmployee(employee);
            if (employee.CafeId == Guid.Empty)
            {
                context.Employee.Add(employeeEntity);
            }
            else
            {
                var cafe = context.Cafe.FirstOrDefault(c => c.CafeId == employee.CafeId.ToByteArray());
                employeeEntity.Cafeemployee.Add(new Cafeemployee() { CafeId = cafe?.CafeId, EmployeeId = employee.Name, StartDate = DateTime.Now.Date });
                context.Employee.Add(employeeEntity);
            }
         

            context.SaveChanges();
            return true;
        }

        public bool UpdateEmployee(Employee employee)
        {
            using var context = new cafemanagerdbContext(_configuration);

            var empItem = context.Employee.FirstOrDefault(c => c.EmployeeId == employee.EmployeeId);
            if (empItem != null)
            {
                empItem.EmployeeName = employee.Name;
                empItem.Email = employee.Email;
                empItem.Gender = employee.Gender;
            }


            var empCafeItem = context.Cafeemployee.FirstOrDefault(c => c.EmployeeId == employee.EmployeeId);
            if (empCafeItem != null && new Guid(empCafeItem.CafeId) != employee.CafeId)
            {
                context.Cafeemployee.Remove(empCafeItem);

                context.Cafeemployee.Add(new Cafeemployee()
                {
                    CafeId = employee.CafeId.ToByteArray(),
                    EmployeeId = employee.EmployeeId,
                    StartDate = DateTime.Now.Date
                });
            }

            context.SaveChanges();
            return true;
        }

        public bool DeleteEmployee(string employeeId)
        {
            using var context = new cafemanagerdbContext(_configuration);
            var empCafe = context.Cafeemployee.FirstOrDefault(c => c.EmployeeId == employeeId);
            context.Cafeemployee.Remove(empCafe ?? throw new InvalidOperationException());

            var employee = context.Employee.FirstOrDefault(c => c.EmployeeId == employeeId);
            context.Employee.Remove(employee ?? throw new InvalidOperationException());
            context.SaveChanges();
            return true;
        }
    }
}
