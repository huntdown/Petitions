using System;

namespace API.Entities
{
    public class Petitions
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int  AutherId { get; set; }
        public int CategoryId { get; set; }
        public DateTime? Created_Date { get; set; }
        public DateTime? Closing_Date { get; set; }
        public string Photo_FileName { get; set; }
    }
}