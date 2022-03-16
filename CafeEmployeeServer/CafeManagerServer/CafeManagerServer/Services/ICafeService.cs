﻿using System;
using System.Collections.Generic;
using System.Linq;
using CafeManager.Common.Models;


namespace CafeManagerServer.Services
{
    public interface ICafeService
    {

        List<Cafe> GetCafe(string location);

        bool CreateCafe(Cafe cafe);

        bool UpdateCafe(Cafe cafe);

        bool DeleteCafe(Guid cafeId);

    }
}