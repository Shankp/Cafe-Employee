using System;

namespace CafeManager.Common.Models
{
    public class Employee
    {
        public string EmployeeId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public int Gender { get; set; }
        public int DaysWorked { get; set; }
        public string CafeName { get; set; }
        public Guid CafeId { get; set; }
    }
}
