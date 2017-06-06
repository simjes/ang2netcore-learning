using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Apple.Models
{
    public class Hero
    {
      public int Id { get; set; }
      
      [Required]
      public string Name { get; set; }
      public ICollection<Power> Powers { get; private set; }

      public Address Address { get; private set; }

      public Hero()
      {
        Powers = new List<Power>();
        Address = new Address(); 
      }
    }
}
