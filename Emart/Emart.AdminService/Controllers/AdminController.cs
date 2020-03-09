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
        [Route("GetAllCategories")]
        public IActionResult GetAllCategories()
        {
            try
            {
                return Ok(_repo.GetAllCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllSubCategories")]
        public IActionResult GetAllSubCategories()
        {
            try
            {
                return Ok(_repo.GetAllSubCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{id}")]
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
        [Route("DeleteSubCategory/{id}")]
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
        [Route("UpdateCategory")]
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
        [Route("UpdateSubCategory")]
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
        [HttpGet]
        [Route("GetCategorybyid/{id}")]
        public IActionResult GetCategory(int id)
        {
            try
            {
                return Ok(_repo.GetCategorybyId(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategorybyid/{id}")]
        public IActionResult GetSubCategory(int id)
        {
            try
            {
                return Ok(_repo.GetSubCategorybyId(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}