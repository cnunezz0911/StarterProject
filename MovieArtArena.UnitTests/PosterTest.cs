using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MovieArtArena.Models.Request;
using MoviePosterArena.Services;
using MovieArtArena.Models.Domain;
using System.Collections.Generic;

namespace MovieArtArena.UnitTests
{
    [TestClass]
    public class PosterTest
    {
        [TestMethod]
        public void Insert_Test()
        {
            PosterAddRequest model = new PosterAddRequest
            {
                Title = "Batman",
                Description = "Movie cover of the batmobile",
                Type = "Movie",
                Price = Convert.ToDecimal("12.99"),
                ModifiedBy = "Me"
            };
            PosterService svc = new PosterService();
            int result = svc.Insert(model);

            Assert.IsTrue(result > 0, "The insert failed!");
        }

        [TestMethod]
        public void SelectAll_Test()
        {
            PosterService svc = new PosterService();
            List<Poster> result = svc.GetAll();

            Assert.IsTrue(result.Count > 0, "Select All has failed");
        }
    }
}
