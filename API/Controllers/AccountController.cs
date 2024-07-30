
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class AccountController(DatabaseContext context,ITokenService tokenService) : BaseApiController
    {
       
       [HttpPost("CreateAccount")] // account/createaccount
       public async Task<ActionResult<User>> CreateAccount(UserDto userDto)
       {
            if (await this.UserExists(userDto.UserName))
                return BadRequest("User Already Available!!!");

            using var hmac = new HMACSHA512();

            User user = new User{
                UserName = userDto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDto.Password)),
                PasswordSalt = hmac.Key          
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user;
       }

        [HttpPost("Login")]
        public async Task<ActionResult<TokenDto>> Login(LoginDto loginDto)
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.UserName.ToLower().Equals(loginDto.userName));

            if (user ==null)
                return Unauthorized("Invalid Username");

            using var hmac = new  HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if(!computedHash[i].Equals(user.PasswordHash[i]))
                    return Unauthorized("Invalid Password");
            }

            TokenDto tokenDto = new TokenDto{Token = tokenService.CreateToken(user)};
            return tokenDto;
        }

       private async Task<bool> UserExists(string userName)
       {
            return await context.Users.AnyAsync(u => u.UserName.ToLower().Equals(userName.ToLower()));
       }
    }
}