using System;
using System.Collections.Generic;
using CafeManager.Common.Models;
using CafeManagerServer.DB;

namespace CafeManagerServer.Services
{
    public class CafeService : ICafeService
    {
        private ICafeStore _cafeStore;
        public CafeService(ICafeStore cafeStore)
        {
            _cafeStore = cafeStore;
        }

        public List<Cafe> GetCafe(string location)
        {
            return _cafeStore.GetCafe(location);
        }

        public int CreateCafe(Cafe cafe)
        {
            return _cafeStore.CreateCafe(cafe);
        }

        public bool UpdateCafe(Cafe cafe)
        {
            return _cafeStore.UpdateCafe(cafe);
        }

        public bool DeleteCafe(Guid cafeId)
        {
            return _cafeStore.DeleteCafe(cafeId);
        }
    }
}
