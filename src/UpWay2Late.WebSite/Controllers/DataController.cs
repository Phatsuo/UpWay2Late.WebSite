using System;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using UpWay2Late.WebSite.Libs;
using UpWay2Late.WebSite.Models;

namespace UpWay2Late.WebSite.Controllers
{
    public class DataController : Controller
    {
        Regex alphanumeric = new Regex("^[a-zA-Z0-9]*$");

        // todo: move to a database.
        private static News[] News = {
            new News { Date = DateTime.Parse("9/20/2016"), Text = "Pick Em Leagues is in testing!" },
            new News { Date = DateTime.Parse("4/19/2016"), Text = "WinRoboCopy 1.3.5953.40896 released!" },
            new News { Date = DateTime.Parse("4/6/2016"), Text = "Buttons project 1.2 released!" },
            new News { Date = DateTime.Parse("3/8/2016"), Text = "WinLaunch 1.0.5911.40718 (alpha) released!" },
            new News { Date = DateTime.Parse("2/13/2016"), Text = "WinRoboCopy 1.2.5887.39320 released!" },
            new News { Date = DateTime.Parse("2/4/2014"), Text = "WinRoboCopy 1.2.5148.1756 released!" },
            new News { Date = DateTime.Parse("2/3/2014"), Text = "Pinboard Bookmark Bar Sync 1.1.1.2 released!" },
            new News { Date = DateTime.Parse("2/3/2014"), Text = "Delicious Bookmark Bar Sync 1.1.1.2 released!" },
            new News { Date = DateTime.Parse("8/26/2012"), Text = "Delicious Bookmark Bar Sync 1.1.1.0 released!" },
            new News { Date = DateTime.Parse("8/24/2012"), Text = "Google Search Extension 0.9.5.5 released!" },
            new News { Date = DateTime.Parse("8/23/2012"), Text = "Awesome Cookie Manager 0.9.9.2 released!" },
            new News { Date = DateTime.Parse("7/23/2012"), Text = "Released WinRoboCopy 1.2.4587.2115!" },
            new News { Date = DateTime.Parse("4/9/2012"), Text = "Released WinRoboCopy 1.2.4482.39775!" },
            new News { Date = DateTime.Parse("3/20/2012"), Text = "Released WinRoboCopy 1.1.4462.41009!" },
            new News { Date = DateTime.Parse("3/5/2012"), Text = "Awesome Cookie Manager 0.8.9.1 released!" },
            new News { Date = DateTime.Parse("2/23/2012"), Text = "Buttons Project 1.0.1.0 released!" },
            new News { Date = DateTime.Parse("2/13/2012"), Text = "Released Awesome Window & Tab Manager Beta 0.8.8.2!" },
            new News { Date = DateTime.Parse("1/20/2012"), Text = "Released WinRoboCopy 1.0.4402.369!" },
            new News { Date = DateTime.Parse("1/18/2012"), Text = "Google Search Extension 0.9.0.0 released!" },
            new News { Date = DateTime.Parse("1/5/2012"), Text = "Released WinRoboCopy 1.0.4387.26559!" },
            new News { Date = DateTime.Parse("11/9/2011"), Text = "Released WinRoboCopy 1.0.4330.22565!" },
            new News { Date = DateTime.Parse("10/21/2011"), Text = "Delicious Bookmark Bar Sync 1.0.0.1 available for download in the Chrome Web Store!" },
            new News { Date = DateTime.Parse("8/10/2011"), Text = "Released WinRoboCopy 1.0.4239.2553!" },
            new News { Date = DateTime.Parse("7/12/2011"), Text = "Released WinRoboCopy 1.0.4209.1288!" },
            new News { Date = DateTime.Parse("6/21/2011"), Text = "Pinboard Bookmark Bar Sync (Beta 9) available for download in the Chrome Web Store!" },
            new News { Date = DateTime.Parse("6/21/2011"), Text = "Delicious Bookmark Bar Sync (Beta 9) available for download in the Chrome Web Store!" },
            new News { Date = DateTime.Parse("5/26/2011"), Text = "Google Search Extension in the works!" },
            new News { Date = DateTime.Parse("5/22/2011"), Text = "Delicious Bookmark Bar Sync (Beta 8.2) is now available for download!" },
            new News { Date = DateTime.Parse("5/10/2011"), Text = "WinRoboCopy 1.0 is now available for download!" }
        };

        private static Contact[] Contacts = {
            new Contact { Name = "General Stuff", Email = "contact@upway2late.com" },
            new Contact { Name = "Support", Email = "support@upway2late.com" },
            new Contact { Name = "Pick Em Leagues", Email = "contact@pickemleagues.com" },
            new Contact { Name = "WinRoboCopy", Email = "winrobocopy@upway2late.com" },
            new Contact { Name = "WinLaunch", Email = "winlaunch@upway2late.com" },
            new Contact { Name = "Google Chrome Delicious Extension", Email = "gcde@upway2late.com" },
            new Contact { Name = "Google Chrome Pinboard Extension", Email = "gcpe@upway2late.com" },
            new Contact { Name = "Google It!", Email = "googleit@upway2late.com" },
            new Contact { Name = "Awesome Window & Tab Manager", Email = "awtm@upway2late.com" }
        };

        [HttpGet("api/[controller]/[action]")]
        public News[] GetNews()
        {
            return News;
        }

        [HttpGet("api/[controller]/[action]")]
        public Contact[] GetContacts()
        {
            return Contacts;
        }

        /// <summary>
        /// Gets the gist.
        /// Ugly as it is, we are going to grab that gist, parse out the document.write() 
        /// wrappers, and return the HTML to the client where it will be in-lined for viewing.
        /// </summary>
        /// <remarks>
        /// TODO: cache these.
        /// </remarks>
        [HttpPost("api/[controller]/[action]")]
        public async Task<GistReponse> GetGist([FromBody] GistRequest gistRequest)
        {
            if (!alphanumeric.IsMatch(gistRequest.User) || !alphanumeric.IsMatch(gistRequest.Id))
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var url = $"https://gist.github.com/{gistRequest.User}/{gistRequest.Id}.js";
            var response = await WebHelper.GetHtml(url) ?? string.Empty;
            var parts = response.Split('\r', '\n');
            var sb = new StringBuilder();

            foreach (var part in parts)
            {
                if (!string.IsNullOrWhiteSpace(part))
                {
                    var line = part.Trim();
                    if (line.StartsWith("document.write(") && line.EndsWith("')"))
                    {
                        line = line.Substring(16, line.Length - 18).Replace("\\\"", "\"").Replace("\\/", "/");

                        // replace the newlines, but not the ones that should be there.
                        line = Regex.Replace(line, "([^\\\\])(\\\\n)", "$1\n");
                        line = Regex.Replace(line, "^\\\\n", "\n", RegexOptions.Multiline);
                        line = Regex.Replace(line, "\\\\\\\\", "\\");

                        sb.AppendLine(line);
                    }
                }
            }

            return new GistReponse
            {
                Success = sb.Length > 0,
                Html = sb.ToString()
            };
        }
    }
}