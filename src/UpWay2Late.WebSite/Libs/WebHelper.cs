using System.Net.Http;
using System.Threading.Tasks;

namespace UpWay2Late.WebSite.Libs
{
    public static class WebHelper
    {
        public static async Task<string> GetHtml(string url)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode(); // Throw if not success
                return await response.Content.ReadAsStringAsync();
            }
        }
    }
}
