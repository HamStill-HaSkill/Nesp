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
    [ApiController]
    [Route("api/subs")]
    public class SubController : Controller
    {
        ApplicationContext db;
        UserContext userDb;
        SubContext subDb;
        private IWebHostEnvironment _env;
        public SubController(ApplicationContext context, UserContext userContext, SubContext subContext, IWebHostEnvironment env)
        {
            _env = env;
            db = context;
            subDb = subContext;
            userDb = userContext;
        }
        [Authorize]
        [HttpPost]
        [Route("all")]
        public IEnumerable<Sub> Get(Sub sub)
        {
            return subDb.Subs.Where(x => x.Username == sub.Username).ToList();
        }

        public IActionResult ParseRSSdotnet(string url)
        {
            SyndicationFeed feed = null;

            try
            {
                using (var reader = XmlReader.Create(url))
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
            var sub = subDb.Subs.FirstOrDefault(x => x.Name == target.Name);
            return ParseRSSdotnet(sub.URL);
        }

        [HttpPost]
        [Route("delrss")]
        public IActionResult DelRSS(Sub target)
        {
            Sub sub = subDb.Subs.FirstOrDefault(x => (x.Username == target.Username) && (x.Name == target.Name));
            if (sub != null)
            {
                subDb.Subs.Remove(sub);
                subDb.SaveChanges();
            }
            return Ok(sub);
        }

        [HttpPost]
        [Route("addrss")]
        public IActionResult AddRSS(Sub sub)
        {            
            Console.WriteLine(1);
            if (ModelState.IsValid)
            {
                Console.WriteLine(2);
                subDb.Subs.Add(sub);
                subDb.SaveChanges();
                return Ok(sub);
            }
            Console.WriteLine(3);
            return BadRequest(ModelState);
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
