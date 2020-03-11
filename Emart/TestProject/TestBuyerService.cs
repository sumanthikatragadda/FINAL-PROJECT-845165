using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;

namespace TestProject
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;
        ItemRepository _repo1;
        CategoryRepository _repo2;
        TransactionRepository _repo3;
        [SetUp]
        public void Setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());
            _repo1 = new ItemRepository(new EmartDBContext());
            _repo2 = new CategoryRepository(new EmartDBContext());
            _repo3 = new TransactionRepository(new EmartDBContext());
        }
        [Test]
        [Description("testing GetBuyerProfile()")]
        public void TestGetBuyerProfile()
        {
            var result = _repo.GetBuyerProfile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditBuyerProfile()
        {
            Buyer buyer = _repo.GetBuyerProfile(1);
            buyer.Username = "sumanthi";
            buyer.Password = "password";
            buyer.Mobilenumber = "123344444";
            buyer.Emailid = "sumanthi@gmail.com";
            _repo.EditBuyerProfile(buyer);
        }
        [Test]
        public void TestSearch()
        {
            var result = _repo1.SearchItems("Jeans");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo2.GetCategory();
            Assert.NotNull(result);
            Assert.AreEqual(result.Count, 4);
        }
        [Test]
        public void TestGetSubCategory()
        {
            var result = _repo2.GetSubCategory(14);
            Assert.NotNull(result);
            Assert.AreEqual(result.Count, 2);
        }
        [Test]
        public void TestTransactionHistory()
        {
            var result = _repo3.TransactionHistory(1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestBuyItem()
        {
            _repo3.BuyItem(new PurchaseHistory()
            {
                Id = 7,
                TransactionType = "debit",
                DateTime = System.DateTime.Now,
                SellerId = 1,
                BuyerId = 1,
                ItemId = 61,
                NumberOfItems = 54,
                Remarks = "good"
            });
            var result = _repo3.TransactionHistory(1);
            Assert.NotNull(result);

        }
        [Test]
        [Description("to test Get All Items from cart")]
        public void TestGetCart()
        {
            var result = _repo3.GetCart();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestAddCart()
        {
            _repo3.AddtoCart(new Cart()
            {
                Id = 2,
                Itemname="abc",
                Remarks="details",
                Description="abc",
                Stocknumber=12,
                Imagepath="a.jpg",
                Buyerid=3,
                Sellerid=3,
                Categoryid=1,
                Subcategoryid=1,
                Itemid=61,
                Price=100
               
            });
            

        }
        [Test]
        [Description("to test Delete Item from cart")]
        public void TestDeleteCart()
        {
            _repo3.DeleteCart(2);
           
        }

    }
}
