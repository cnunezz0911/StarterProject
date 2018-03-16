﻿using MovieArtArena.Models.Domain;
using MovieArtArena.Models.Request;
using MovieArtArena.Models.Response;
using MoviePosterArena.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieArtArena.Web.Controllers.Api
{
    [RoutePrefix("api/poster")]
    public class PosterController : ApiController
    {
        // GET api/<controller>
        [Route("getall")]
        public HttpResponseMessage GetAll()
        {
            try
            {
                PosterService svc = new PosterService();
                ItemListResponse<Poster> response = new ItemListResponse<Poster>();
                response.Items = svc.GetAll();
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception ex)
            {

                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [Route("getbyid")]
        public HttpResponseMessage GetById()
        {
            return Request.CreateResponse(HttpStatusCode.OK, "called get by id");
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]PosterAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PosterService svc = new PosterService();
                    ItemResponse<int> response = new ItemResponse<int>();
                    response.Item = svc.Insert(model);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {

                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}