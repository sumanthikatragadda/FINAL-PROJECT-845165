using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
            private readonly IAccountRepository _repo;
            public AccountController(IAccountRepository repo)
            {
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
            try
            {
                return Ok(_repo.BuyerLogin(uname,pwd));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("SellerLogin/{uname}/{pwd}")]
        public IActionResult SLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.SellerLogin(uname, pwd));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}