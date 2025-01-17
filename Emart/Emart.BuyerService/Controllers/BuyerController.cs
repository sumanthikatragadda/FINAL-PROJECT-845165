﻿using System;
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
    public class BuyerController : ControllerBase
    {

        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Getbuyerbyid/{id}")]
        public IActionResult GetBuyerProfile(int id)
        {
            try
            {
                return Ok(_repo.GetBuyerProfile(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("EditBuyerProfile")]
        public IActionResult EditProfile(Buyer item)
        {
            try
            {
                _repo.EditBuyerProfile(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}