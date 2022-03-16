using System;

namespace CafeManager.Common.Models
{
    public class Cafe
    {
        public Guid CafeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Logo { get; set; }
        public string Location { get; set; }
        public int EmployeeCount { get; set; }

    }
}
