﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieArtArena.Models.Response
{
    public class ItemResponse<T> : SuccessResponse
    {
        public T Item { get; set; }
    }
}
