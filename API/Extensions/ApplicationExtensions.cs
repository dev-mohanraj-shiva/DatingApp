
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationExtensions
    {
        public static IServiceCollection AddApplicationExtension(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddDbContext<DatabaseContext>(
                option =>
                {
                    option.UseSqlite(configuration.GetConnectionString("baseConnection"));
                }
            );
            services.AddScoped<ITokenService, TokenService>();
            services.AddCors();
            return services;
        }
    }
}