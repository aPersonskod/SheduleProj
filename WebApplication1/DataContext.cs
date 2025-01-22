using System.Text.RegularExpressions;
using Newtonsoft.Json;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace WebApplication1;

public class DataContext
{
    private Root _chislitel;
    private Root _znamenatel;
    private const string _chislitelPath = @"data\Chislitel.json";
    private const string _znamenatelPath = @"data\Znamenatel.json";

    public Root Chislitel
    {
        get => _chislitel;
        set => _chislitel = value;
    }

    public Root Znamenatel
    {
        get => _znamenatel;
        set => _znamenatel = value;
        //Task.Run(async () => await Serialize(value, _znamenatelPath));
    }

    public async Task UpdateChislitel(List<DaysDatum> schedule)
    {
        Chislitel = new Root() { daysData = schedule };
        await using var fs = new FileStream(_chislitelPath, FileMode.OpenOrCreate);
        await JsonSerializer.SerializeAsync<Root>(fs, Chislitel);
    }
    public async Task UpdateZnamenatel(List<DaysDatum> schedule)
    {
        Znamenatel = new Root() { daysData = schedule };
        await using var fs = new FileStream(_znamenatelPath, FileMode.OpenOrCreate);
        await JsonSerializer.SerializeAsync<Root>(fs, Znamenatel);
    }

    public DataContext()
    {
        Chislitel = JsonConvert.DeserializeObject<Root>(File.ReadAllText(_chislitelPath))!;
        Znamenatel = JsonConvert.DeserializeObject<Root>(File.ReadAllText(_znamenatelPath))!;
    }
}

#region Classes

public class DaysDatum
{
    public string name { get; set; }
    public string fTime { get; set; }
    public string fLesson { get; set; }
    public string fTeacher { get; set; }
    public string fCab { get; set; }
    public FLink fLink { get; set; }
    public string sTime { get; set; }
    public string sLesson { get; set; }
    public string sTeacher { get; set; }
    public string sCab { get; set; }
    public SLink sLink { get; set; }
}

public class FLink
{
    public string link { get; set; }
    public string key { get; set; }
}

public class Root
{
    public List<DaysDatum> daysData { get; set; }
}

public class SLink
{
    public string link { get; set; }
    public string key { get; set; }
}


#endregion

#region Services

public interface IChislitelService
{
    List<DaysDatum> GetSchedule();
    void UpdateSchedule(List<DaysDatum> schedule);
}

public interface IZnamenatelService
{
    List<DaysDatum> GetSchedule();
    void UpdateSchedule(List<DaysDatum> schedule);
}

public class ChislitelService : IChislitelService
{
    private readonly DataContext _dataContext;

    public ChislitelService(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<DaysDatum> GetSchedule() => _dataContext.Chislitel.daysData;

    public void UpdateSchedule(List<DaysDatum> schedule) => Task.Run(async () => await _dataContext.UpdateChislitel(schedule));
}

public class ZnamenatelService : IZnamenatelService
{
    private readonly DataContext _dataContext;

    public ZnamenatelService(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<DaysDatum> GetSchedule() => _dataContext.Znamenatel.daysData;

    public void UpdateSchedule(List<DaysDatum> schedule) => Task.Run(async () => await _dataContext.UpdateZnamenatel(schedule));
}

#endregion

public static class Her
{
    private static Regex _regex = 
        new Regex(@"(\\u(?<Value>[a-zA-Z0-9]{4}))+", RegexOptions.Compiled);
    public static string ConvertUnicodeEscapeSequencetoUTF8Characters(string sourceContent)
    {
        //Check https://stackoverflow.com/questions/9738282/replace-unicode-escape-sequences-in-a-string
        return _regex.Replace(
            sourceContent, m =>
            {
                var urlEncoded = m.Groups[0].Value.Replace(@"\u00", "%");
                var urlDecoded = System.Web.HttpUtility.UrlDecode(urlEncoded);
                return urlDecoded;
            }
        );
    }
}
