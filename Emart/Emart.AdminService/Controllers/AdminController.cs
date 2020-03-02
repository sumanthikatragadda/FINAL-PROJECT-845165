using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public void Addcategory(Category obj)
        {
            _repo.AddCategory(obj);
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public void Addsubcategory(SubCategory obj)
        {
            _repo.AddSubcategory(obj);
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
        [Route("GetSubCategories")]
        public IActionResult GetAllSubCategories()
        {
            try
            {
                return Ok(_repo.GetSubCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCat/{id}")]
        public IActionResult DeleteCategory(int id)
        {
            try
            {
                _repo.DeleteCategory(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSub/{id}")]
        public IActionResult DeleteSubCategory(int id)
        {
            try
            {
                _repo.DeleteSubcategory(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("UpdateCat")]
        public IActionResult UpdateCategory(Category item)
        {
            try
            {
                _repo.UpdateCategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPut]
        [Route("UpdateSub")]
        public IActionResult Update(SubCategory item)
        {
            try
            {
                _repo.UpdateSubcategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}