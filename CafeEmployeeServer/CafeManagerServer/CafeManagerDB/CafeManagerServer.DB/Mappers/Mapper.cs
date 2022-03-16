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
                Logo = cafe.Logo
            };
        }

        public static DbCore.Cafe MapDataCafeToCafe(Cafe cafe)
        {
            return new DbCore.Cafe()
            {
                Location = cafe.Location,
                CafeId = cafe.CafeId.ToByteArray(),
                CafeDescription = cafe.Description,
                CafeName = cafe.Name,
                Logo = cafe.Logo
            };
        }

        public static Employee MapEmployeeToDataEmployee(DbCore.Employee employee)
        {
            return new Employee()
            {
                Name = employee.EmployeeName,
                Email = employee.Email,
                EmployeeId = employee.EmployeeId,
                Gender = employee.Gender,
                PhoneNumber = employee.Gender
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

            };
        }
    }
}
