using System.ComponentModel.DataAnnotations;

namespace MovieArtArena.Models.Request
{
    public class PosterUpdateRequest : PosterAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}
