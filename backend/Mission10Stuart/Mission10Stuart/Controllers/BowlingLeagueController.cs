using Mission10Stuart.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mission10Stuart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private BowlingLeagueContext _context;
        
        public BowlersLeagueController(BowlingLeagueContext temp)
        {
            _context = temp;
        }

        [HttpGet(Name = "GetTableName")]
        public IEnumerable<Bowlers> Get()
        {
            var BowlersList = _context.Bowlers.ToList();

            return (BowlersList);
        }
    }
}
