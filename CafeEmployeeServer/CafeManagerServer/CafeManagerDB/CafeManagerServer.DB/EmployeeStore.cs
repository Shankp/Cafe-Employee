using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CafeManagerServer.DB.DbCore;
using CafeManagerServer.DB.Mappers;
using Employee = CafeManager.Common.Models.Employee;

namespace CafeManagerServer.DB
{
    public class EmployeeStore : IEmployeeStore
    {
        public List<Employee> GetEmployee(string cafeName)
        {
            using var context = new cafemanagerdbContext();
            if (!string.IsNullOrEmpty(cafeName))
            {
                var empIdInCafe = context.Cafeemployee.Where(c => c.Cafe.CafeName == cafeName).ToList();
                return empIdInCafe.Select(c => Mapper.MapEmployeeToDataEmployee(c.Employee)).OrderByDescending(c => c.DaysWorked).ToList();
            }
            return context.Employee.Select(c => Mapper.MapEmployeeToDataEmployee(c)).OrderByDescending(c => c.DaysWorked).ToList();
        }

        public bool CreateEmployee(Employee employee)
        {

            using var context = new cafemanagerdbContext();

            var cafe = context.Cafe.FirstOrDefault(c => c.CafeId == employee.CafeId.ToByteArray());
            var employeeEntity = Mapper.MapDataEmployeeToEmployee(employee);
            employeeEntity.Cafeemployee.Add(new Cafeemployee() { CafeId = cafe.CafeId, EmployeeId = employee.Name, StartDate = DateTime.Now.Date });
            context.Employee.Add(employeeEntity);
            
            context.SaveChanges();
            return true;
        }

        public bool UpdateEmployee(Employee employee)
        {
            using var context = new cafemanagerdbContext();

            var empItem = context.Employee.FirstOrDefault(c => c.EmployeeId == employee.EmployeeId);
            empItem.EmployeeName = employee.Name;
            empItem.Email = employee.Email;
            //empItem.Cafeemployee.FirstOrDefault().CafeId = employee.CafeId.ToByteArray();


            var empCafeItem = context.Cafeemployee.FirstOrDefault(c => c.EmployeeId == employee.EmployeeId);
            if (new Guid(empCafeItem.CafeId) != employee.CafeId)
            {
                empCafeItem.CafeId = employee.CafeId.ToByteArray();
            }

            context.SaveChanges();
            return true;
        }

        public bool DeleteEmployee(string employeeId)
        {
            using var context = new cafemanagerdbContext();
            var empCafe = context.Cafeemployee.FirstOrDefault(c => c.EmployeeId == employeeId);
            context.Cafeemployee.Remove(empCafe);

            var employee = context.Employee.FirstOrDefault(c => c.EmployeeId == employeeId);
            context.Employee.Remove(employee);
            context.SaveChanges();
            return true;
        }
    }
}
