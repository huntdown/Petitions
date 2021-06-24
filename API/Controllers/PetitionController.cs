using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Dto;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class PetitionController : BaseApiController
    {
        private readonly DataContext _context;
        public PetitionController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Petitions>>> GetPetitons()
        {
            return await _context.Petitions.ToListAsync();
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Petitions>> GetPetiton(int id)
        {
            return await _context.Petitions.FindAsync(id);
            
        }

        // [HttpPost]
        // public async Task<ActionResult<PetitonDto>> AddPetition()
        // {
            
        // }
    }
}