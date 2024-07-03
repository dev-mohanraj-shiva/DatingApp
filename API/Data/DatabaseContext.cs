

using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DatabaseContext(DbContextOptions options) : DbContext(options)
    {
       public DbSet<User> Users{get;set;}
    }
}