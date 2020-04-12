using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace StoreFrontApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();

            //    var greeting = new Greeting {
            //        phrase = "Duh"
            //    };

            //    return greeting;
        }


        [HttpGet("Hello")]
        public Greeting Hello()
        {

            var greeting = new Greeting { 
                phrase = "duh"
            };

            return greeting;
        }
        [HttpGet]
        [Route("/helloWorld")]
        public Greeting whatUp()
        {
            Greeting string1 = new Greeting
            {
                phrase = "Hello World!"
            };
            return string1;
        }
    }
}
