using System.ComponentModel.DataAnnotations;

namespace MovieArtArena.Models.Request
{
    public class PosterAddRequest
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public decimal Price { get; set; }
        [MaxLength(128)]
        public string ModifiedBy { get; set; }

    }
}
