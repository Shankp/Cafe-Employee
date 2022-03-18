using CafeManager.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CafeManagerServer.DB
{
    public interface ICafeStore
    {
        List<Cafe> GetCafe(string location);

        int CreateCafe(Cafe cafe);

        bool UpdateCafe(Cafe cafe);

        int DeleteCafe(Guid cafeId);
    }
}
