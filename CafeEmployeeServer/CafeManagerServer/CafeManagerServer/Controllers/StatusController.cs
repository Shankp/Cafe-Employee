using Microsoft.AspNetCore.Mvc;
using System;

namespace CafeManagerServer.Controllers
{
    [ApiController]
    [Route("api/status")]
    public class StatusController : Controller
    {
        [HttpGet]
        [Route("health")]
        public ActionResult GetCafeList(string cafeId)
        {
            try
            {
                return Ok("healthy server");
            }
            catch (Exception e)
            {               
                throw;
            }

        }
    }
}
