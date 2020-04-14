using Microsoft.EntityFrameworkCore;

namespace StoreFrontApp.Model
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}
