using Microsoft.EntityFrameworkCore;
using UrbanOutDomain.Entities;

namespace UrbanOutDomain
{
    public class UrbanOutContext :DbContext
    {
        public DbSet<User> Users { get; set; }

        public UrbanOutContext(DbContextOptions options) : base(options) 
        {
            
        }
    }
}
