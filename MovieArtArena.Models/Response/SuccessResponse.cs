using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieArtArena.Models.Response
{
    public class SuccessResponse : Response
    {
        public SuccessResponse()
        {
            this.isSuccessful = true;
        }
    }
}
