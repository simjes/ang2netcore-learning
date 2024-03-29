using Apple.Models;
using handv.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace handv.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private readonly HeroService _heroService;


        public HeroesController()
        {
            _heroService = new HeroService();
        }

        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            if (User.Identity.IsAuthenticated)
            {
                return _heroService.GetHeroes();
            }

            return _heroService.GetTopFiveHeroes();
        }

        //[AllowAnonymous]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_heroService.GetHeroById(id));
        }


        [HttpPost]
        public IActionResult Post([FromBody]Hero hero)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(_heroService.AddHero(hero));
        }

        //// POST: api/Default
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Default/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
