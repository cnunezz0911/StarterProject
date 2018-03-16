using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieArtArena.Models.Response
{
    class ErrorResponse : Response
    {
        public ErrorResponse()
        {
            this.isSuccessful = false;
        }
    }
}
