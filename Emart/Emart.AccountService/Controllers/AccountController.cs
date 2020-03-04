using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration configuration;
            private readonly IAccountRepository _repo;
            public AccountController(IAccountRepository repo,IConfiguration configuration)
            {
            this.configuration = configuration;
                _repo = repo;
            }
            [HttpPost]
            [Route("AddBuyer")]
           public IActionResult PostB(Buyer item)
             {
                try
                {
                _repo.RegisterBuyer(item);
                return Ok();
                }
                catch (Exception ex)
                {
                return NotFound(ex.InnerException.Message);
                }
           }
        [HttpPost]
        [Route("AddSeller")]
        public IActionResult PostS(Seller item)
        {
            try
            {
                _repo.RegisterSeller(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("BuyerLogin/{uname}/{pwd}")]
        public IActionResult BLogin(string uname,string pwd)
        {
            Token token = null;
            try
            {
                Buyer buyer = _repo.BuyerLogin(uname, pwd);
                if (buyer != null)
                {
                    token = new Token() { bid = buyer.Id, token = GenerateJwtToken(uname), message = "success" };

                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("SellerLogin/{uname}/{pwd}")]
        public IActionResult SLogin(string uname, string pwd)
        {

            Token token = null;
            try
            {
                Seller seller = _repo.SellerLogin(uname, pwd);
                if (seller != null)
                {
                    token = new Token() { sid = seller.Id, token = GenerateJwtToken(uname), message = "success" };

                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );


            return new JwtSecurityTokenHandler().WriteToken(token);


          }
    }
}
