using System;
using System.Collections.Generic;
using System.Text;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using NUnit.Framework;
namespace TestProject
{
    [TestFixture]
    class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EmartDBContext());
        }
        [Test]
        [Description("to test add seller")]
        public void TestRegisterSeller()

        {
            _repo.RegisterSeller(new Seller()
            {
                Id = 7,
                Username = "abc",
                Password = "password",
                Companyname = "infosys",
                Contactnumber = "9000326398",
                Emailid = "hello@123.com",
                Gstin = "90",
                Briefaboutcompany = "good",
                Website = "www.infosys.com",
                PostalAddress = "hyd"


            });
        }
        [Test]
        [Description("to test add buyer")]
        public void TestRegisterBuyer()
        {
            _repo.RegisterBuyer(new Buyer()
            {
                Id = 13,
                Createddatetime = System.DateTime.Now,
                Username = "samhi",
                Password = "password",
                Emailid = "samhi@gmail.com",
                Mobilenumber = "9123456789"
            });
        }
        [Test]
        [Description("to check seller login")]
        public void TestSellerLogin()
        {
            var result = _repo.SellerLogin("abc", "password");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to check Buyer login")]
        public void TestBuyerLogin()
        {
            var result = _repo.BuyerLogin("samhi", "password");
            Assert.IsNotNull(result);
        }


    }
}

