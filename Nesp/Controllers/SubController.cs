using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Nesp.Model;
using System.ServiceModel.Syndication;
using System.Xml;
using Newtonsoft.Json;

namespace Nesp.Controllers
{
    public class Sub 
    {
        public string Target {get; set;}
    }

    [ApiController]
    [Route("api/subs")]
    public class SubController : Controller
    {
        ApplicationContext db;
        UserContext userDb;
        private IWebHostEnvironment _env;
        public SubController(ApplicationContext context, UserContext userContext, IWebHostEnvironment env)
        {
            _env = env;
            db = context;
            userDb = userContext;
        }
        [Authorize]
        [HttpPost]
        [Route("all")]
        public IEnumerable<UserTask> Get(Name username)
        {
            return db.Tasks.Where(x => x.UserName == username.Username).ToList();
        }

        public IActionResult ParseRSSdotnet()
        {
            SyndicationFeed feed = null;

            try
            {
                using (var reader = XmlReader.Create("https://news.tut.by/rss/index.rss"))
                {
                    feed = SyndicationFeed.Load(reader);
                }
            }
            catch { } // TODO: Deal with unavailable resource.
            var newsNotes = new List<News>(); 

            if (feed != null)
            {
                foreach (var element in feed.Items)
                {
                    var note = new News();
                    note.Title = element.Title.Text;
                    newsNotes.Add(note);
                }
            }
            return Json(feed.Items);

        }

        [HttpPost]
        [Route("rss")]
        public IActionResult GetRSS(Sub target)
        {
            return ParseRSSdotnet();
        }

        [Authorize]
        [HttpGet("{id}")]
        public UserTask Get(int id)
        {
            UserTask UserTask = db.Tasks.FirstOrDefault(x => x.Id == id);
            return UserTask;
        }

        [Authorize]
        [HttpPost]
        public IActionResult Post(UserTask UserTask)
        {
            if (ModelState.IsValid)
            {
                db.Tasks.Add(UserTask);
                db.SaveChanges();
                return Ok(UserTask);
            }
            return BadRequest(ModelState);
        }

        [Authorize]
        [HttpPut]
        public IActionResult Put(UserTask UserTask)
        {
            if (ModelState.IsValid)
            {
                db.Update(UserTask);
                db.SaveChanges();
                return Ok(UserTask);
            }
            return BadRequest(ModelState);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            UserTask UserTask = db.Tasks.FirstOrDefault(x => x.Id == id);
            if (UserTask != null)
            {
                db.Tasks.Remove(UserTask);
                db.SaveChanges();
            }
            return Ok(UserTask);
        }
    }

}
