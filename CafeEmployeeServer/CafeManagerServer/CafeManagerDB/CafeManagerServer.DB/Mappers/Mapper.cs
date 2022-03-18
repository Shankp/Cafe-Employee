using System;
using System.Collections.Generic;
using System.Text;
using CafeManager.Common.Models;

namespace CafeManagerServer.DB.Mappers
{
    public class Mapper
    {
        public static Cafe MapCafeToDataCafe(DbCore.Cafe cafe)
        {
            return new Cafe()
            {
                Location = cafe.Location,
                CafeId = new Guid(cafe.CafeId),
                Description = cafe.CafeDescription,
                EmployeeCount = cafe.Cafeemployee.Count,
                Name = cafe.CafeName,
                Logo = cafe.Logo,
                Action = new Guid(cafe.CafeId),
                Employee = new Guid(cafe.CafeId)
            };
        }

        public static DbCore.Cafe MapDataCafeToCafe(Cafe cafe)
        {
            return new DbCore.Cafe()
            {
                CafeId = Guid.NewGuid().ToByteArray(),
                Location = cafe.Location,
                CafeDescription = cafe.Description,
                CafeName = cafe.Name,
                Logo = cafe.Logo
            };
        }

        public static Employee MapEmployeeToDataEmployee(DbCore.Employee employee, DateTime startDate,string cafeName)
        {
            return new Employee()
            {
                Name = employee.EmployeeName,
                Email = employee.Email,
                EmployeeId = employee.EmployeeId,
                Gender = employee.Gender,
                PhoneNumber = employee.PhoneNumber,
                DaysWorked = (int) ((DateTime.Now.Date - startDate).TotalDays),
                CafeName = cafeName,
                Action = employee.EmployeeId

            };
        }

        public static DbCore.Employee MapDataEmployeeToEmployee(Employee employee)
        {
            return new DbCore.Employee()
            {
                EmployeeName = employee.Name,
                Email = employee.Email,
                EmployeeId = employee.EmployeeId,
                Gender = employee.Gender,
                PhoneNumber = employee.PhoneNumber
            };
        }
    }
}
