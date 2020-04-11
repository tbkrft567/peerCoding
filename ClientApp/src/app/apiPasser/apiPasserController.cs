using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StoreFrontApp.ClientApp.src.app.apiPasser
{
    [Route("api/[controller]")]
    [ApiController]
    public class apiPasserController : ControllerBase
    {
        // GET: api/apiPasser
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/apiPasser/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/apiPasser
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/apiPasser/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
