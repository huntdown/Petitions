using System;

namespace API.Dto
{
    public class PetitonDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public DateTime? Closing_Date { get; set; }
    }
}