using Apple.Models;
using System.Collections.Generic;
using System.Linq;

namespace handv.Services
{
    public class HeroService
    {
        private readonly List<Hero> _heroes = new List<Hero>
        {
            new Hero() {Name = "Batman", Id = 1},
            new Hero() {Name = "Superman", Id = 2},
            new Hero() {Name = "Aquaman", Id = 3},
            new Hero() {Name = "Hulk", Id = 4},
            new Hero() {Name = "Wonder Woman", Id = 5},
            new Hero() {Name = "Ironman", Id = 6}
        };

        public Hero AddHero(Hero hero)
        {
            hero.Id = ++_heroes.Last().Id;
            _heroes.Add(hero);
            return hero;
        }

        public IEnumerable<Hero> GetHeroes()
        {
            return _heroes;
        }

        public IEnumerable<Hero> GetTopFiveHeroes() //change to top 5
        {
            return _heroes.Where(hero => hero.Id % 2 == 0);
        }

        public Hero GetHeroById(int id)
        {
            return _heroes.Single(hero => hero.Id == id);
        }
    }
}
