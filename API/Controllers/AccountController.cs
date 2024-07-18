
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
   
    public class AccountController(DatabaseContext context) : BaseApiController
    {
       
       [HttpPost("CreateAccount")] // account/createaccount
       public async Task<ActionResult<User>> CreateAccount(string userName,string password)
       {
            using var hmac = new HMACSHA512();

            User user = new User{
                UserName = userName,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
                PasswordSalt = hmac.Key          
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user;
       }
    }
}