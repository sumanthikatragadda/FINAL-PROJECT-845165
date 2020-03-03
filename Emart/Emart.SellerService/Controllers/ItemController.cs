using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Add")]
        public IActionResult Add(Items item)
        {
            try
            {
                _repo.AddItems(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetAllItems")]
        public IActionResult GetAllItems()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetItems/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repo.GetItems(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _repo.DeleteItems(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("Update")]
        public IActionResult Update(Items item)
        {
            try
            {
                _repo.UpdateItems(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sid}")]
        public IActionResult ViewItems(int sid)
        {
            try
            {
                return Ok(_repo.ViewItems(sid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetAllCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategories/{categoryid}")]
        public IActionResult GetAllSubCategories(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}