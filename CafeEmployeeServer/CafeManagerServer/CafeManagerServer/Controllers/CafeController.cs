using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using CafeManager.Common.Models;
using CafeManagerServer.Services;

namespace CafeManagerServer.Controllers
{
    [ApiController]
    [Route("api/cafe")]
    public class CafeController : Controller
    {
        private readonly ICafeService _cafeService;

        public CafeController(ICafeService cafeService)
        {
            _cafeService = cafeService;
        }

        [HttpGet]
        [Route("location")]
        public ActionResult<List<Cafe>> GetCafeList(string location)
        {
            try
            {
                return _cafeService.GetCafe(location);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }

        [HttpPost]
        [Route("add")]
        public ActionResult<bool> AddCafe([FromBody] Cafe cafe)
        {
            try
            {
                var isCafeAdded = _cafeService.CreateCafe(cafe);
                return Ok(isCafeAdded);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }


        [HttpPut]
        [Route("update")]
        public ActionResult<bool> UpdateCafe([FromBody] Cafe cafe)
        {
            try
            {
                var isCafeUpdateed = _cafeService.UpdateCafe(cafe);
                return Ok(isCafeUpdateed);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }

        [HttpDelete]
        [Route("delete/{cafeId}")]
        public ActionResult<bool> DeleteCafe(string cafeId)
        {
            try
            {
                var isDeleted = _cafeService.DeleteCafe(new Guid(cafeId));
                return Ok(isDeleted);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }
    }
}
