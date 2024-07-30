using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// builder.Services.AddDbContext<DatabaseContext>(
//     option =>
//     {
//         option.UseSqlite(builder.Configuration.GetConnectionString("baseConnection"));
//     }
// );
// builder.Services.AddScoped<ITokenService,TokenService>();
// builder.Services.AddCors();
// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//                 .AddJwtBearer(Options =>
//                 {
//     var tokenKey = builder.Configuration["TokenKey"] ?? throw new Exception("Token key not configured");
//     Options.TokenValidationParameters = new TokenValidationParameters
//     {
//         ValidateIssuerSigningKey = true,
//         IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
//         ValidateAudience = false,
//         ValidateIssuer = false
//     };
//                 });

builder.Services.AddApplicationExtension(builder.Configuration);
builder.Services.AddAuthenticationExtension(builder.Configuration);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyHeader().
                AllowAnyMethod().
                AllowAnyOrigin()
                // .WithOrigins("","")
                );
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
