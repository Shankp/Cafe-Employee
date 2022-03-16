using System;
using System.Collections.Generic;

namespace CafeManagerServer.DB.DbCore
{
    public partial class Cafe
    {
        public Cafe()
        {
            Cafeemployee = new HashSet<Cafeemployee>();
        }

        public byte[] CafeId { get; set; }
        public string CafeName { get; set; }
        public string CafeDescription { get; set; }
        public string Location { get; set; }
        public byte[] Logo { get; set; }

        public virtual ICollection<Cafeemployee> Cafeemployee { get; set; }
    }
}
