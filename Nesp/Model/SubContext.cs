using Microsoft.EntityFrameworkCore;


namespace Nesp.Model
{
    public class SubContext : DbContext
    {
        public SubContext(DbContextOptions<SubContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Sub> Subs { get; set; }
    }
}
