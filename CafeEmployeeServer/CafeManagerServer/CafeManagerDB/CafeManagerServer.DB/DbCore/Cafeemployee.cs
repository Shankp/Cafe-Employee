using System;
using System.Collections.Generic;

namespace CafeManagerServer.DB.DbCore
{
    public partial class Cafeemployee
    {
        public byte[] CafeId { get; set; }
        public string EmployeeId { get; set; }
        public DateTime StartDate { get; set; }

        public virtual Cafe Cafe { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
