﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CafeManagerServer.DB.DbCore;
using CafeManagerServer.DB.Mappers;
using Cafe = CafeManager.Common.Models.Cafe;

namespace CafeManagerServer.DB
{
    public class CafeStore : ICafeStore
    {
        public List<Cafe> GetCafe(string location)
        {
            using var context = new cafemanagerdbContext();
            var cafeList = context.Cafe.ToList();
            if (!string.IsNullOrEmpty(location))
                cafeList = cafeList.Where(c => c.Location == location).ToList();

            return cafeList.Select(Mapper.MapCafeToDataCafe).OrderByDescending(c => c.EmployeeCount).ToList();
        }

        public bool CreateCafe(Cafe cafe)
        {
            using var context = new cafemanagerdbContext();
            var cafeEntity = Mapper.MapDataCafeToCafe(cafe);
            context.Cafe.Add(cafeEntity);
            context.SaveChanges();
            return true;
        }

        public bool UpdateCafe(Cafe cafe)
        {
            using var context = new cafemanagerdbContext();

            var item = context.Cafe.FirstOrDefault(c => c.CafeId == cafe.CafeId.ToByteArray());
            if (item != null)
            {
                item.CafeDescription = cafe.Description;
                item.CafeName = cafe.Name;
                item.Location = cafe.Location;
                item.Logo = cafe.Logo;
            }
            context.SaveChanges();
            return true;
        }

        public bool DeleteCafe(Guid cafeId)
        {
            using var context = new cafemanagerdbContext();

            var item = context.Cafe.FirstOrDefault(c => c.CafeId == cafeId.ToByteArray());
            context.Cafe.Remove(item ?? throw new InvalidOperationException());

            var cafeEmpitem = context.Cafeemployee.Where(c => c.CafeId == cafeId.ToByteArray()).ToList();
            context.RemoveRange(cafeEmpitem);


            //check employees are deleted
            context.SaveChanges();
            return true;
        }
    }
}