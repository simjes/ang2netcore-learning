using Microsoft.AspNetCore.Mvc;
using Apple.Models;

namespace Apple.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]Hero hero)
        {
          if (!ModelState.IsValid)
            return BadRequest(ModelState);

          // Save the patient in the database 
          // patientsService.AddPatient(patient);
          hero.Id = 1; // to simulate the generation of an ID 

          return Ok(hero); 
        }
    }
}
