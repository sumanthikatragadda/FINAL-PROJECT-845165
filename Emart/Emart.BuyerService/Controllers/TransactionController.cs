using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionRepository _repo;
        public TransactionController(ITransactionRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult Add(PurchaseHistory item)
        {
            try
            {
                _repo.BuyItem(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("TransactionHistory/{id}")]
        public IActionResult TransactionHistory(int id)
        {
            try
            {
                return Ok(_repo.TransactionHistory(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(Cart item)
        {
            try
            {
                _repo.AddtoCart(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCart")]
        public IActionResult GetCart()
        {
            try
            {
                return Ok(_repo.GetCart());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCart/{id}")]
        public IActionResult DeleteCart(int id)
        {
            try
            {
                _repo.DeleteCart(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}
