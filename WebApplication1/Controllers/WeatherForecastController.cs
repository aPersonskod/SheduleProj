using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace WebApplication1.Controllers;

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

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
    }
}

[ApiController]
[Route("[controller]")]
public class ChislitelController : ControllerBase
{
    private readonly IChislitelService _chislitelService;

    public ChislitelController(IChislitelService chislitelService)
    {
        _chislitelService = chislitelService;
    }
    
    [HttpGet(Name = "getChislitel")]
    public IActionResult GetAll()
    {
        var rez = _chislitelService.GetSchedule();
        return Ok(rez);
    }

    [HttpPatch("update")]
    public IActionResult Update([FromBody]object data)
    {
        var her = JsonSerializer.Deserialize<List<DaysDatum>>(Her.ConvertUnicodeEscapeSequencetoUTF8Characters(data.ToString()));
        if (data == null || her is not List<DaysDatum> root) return BadRequest("data is null");
        _chislitelService.UpdateSchedule(root);
        return Ok();
    }
}

[ApiController]
[Route("[controller]")]
public class ZnamenatelController : ControllerBase
{
    private readonly IZnamenatelService _znamenatelService;

    public ZnamenatelController(IZnamenatelService znamenatelService)
    {
        _znamenatelService = znamenatelService;
    }
    
    [HttpGet(Name = "getZnamenatel")]
    public IActionResult GetAll()
    {
        var rez = _znamenatelService.GetSchedule();
        return Ok(rez);
    }

    [HttpPatch("update")]
    public IActionResult Update([FromBody]object data)
    {
        var her = JsonSerializer.Deserialize<List<DaysDatum>>(Her.ConvertUnicodeEscapeSequencetoUTF8Characters(data.ToString()));
        if (data == null || her is not List<DaysDatum> root) return BadRequest("data is null");
        _znamenatelService.UpdateSchedule(root);
        return Ok();
    }
}