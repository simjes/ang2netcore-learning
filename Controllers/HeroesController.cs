using Apple.Models;
using handv.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Apple.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private HeroService _heroService;

        public HeroesController()
        {
            _heroService = new HeroService();
        }


        [HttpGet]
        public IEnumerable<Hero> Get()
        {

            return _heroService.getHeroes();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_heroService.getHeroById(id));
        }


        [HttpPost]
        public IActionResult Post([FromBody]Hero hero)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(_heroService.addHero(hero));
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
