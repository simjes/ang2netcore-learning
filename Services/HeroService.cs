using Apple.Models;
using System.Collections.Generic;
using System.Linq;

namespace handv.Services
{
    public class HeroService
    {
        List<Hero> heroes = new List<Hero>
        {
            new Hero() {Name = "Batman", Id = 1},
            new Hero() {Name = "Superman", Id = 2},
            new Hero() {Name = "Aquaman", Id = 3},
            new Hero() {Name = "Hulk", Id = 4},
            new Hero() {Name = "Wonder Woman", Id = 5},
            new Hero() {Name = "Ironman", Id = 6}
        };

        public Hero addHero(Hero hero)
        {
            hero.Id = ++heroes.Last().Id;
            heroes.Add(hero);
            return hero;
        }

        public IEnumerable<Hero> getHeroes()
        {
            return heroes;
        }

        public IEnumerable<Hero> getTopFiveHeroes() //change to top 5
        {
            return heroes.Where(hero => hero.Id % 2 == 0);
        }

        public Hero getHeroById(int id)
        {
            return heroes.Single(hero => hero.Id == id);
        }
    }
}
