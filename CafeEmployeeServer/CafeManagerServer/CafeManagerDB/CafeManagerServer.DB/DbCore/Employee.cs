using System;
using System.Collections.Generic;

namespace CafeManagerServer.DB.DbCore
{
    public partial class Employee
    {
        public Employee()
        {
            Cafeemployee = new HashSet<Cafeemployee>();
        }

        public string EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Email { get; set; }
        public int Gender { get; set; }
        public int PhoneNumber { get; set; }

        public virtual ICollection<Cafeemployee> Cafeemployee { get; set; }
    }
}
