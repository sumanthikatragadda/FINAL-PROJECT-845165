using System;
using System.Collections.Generic;
using System.Text;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
using NUnit.Framework;

namespace TestProject
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        ItemRepository _repo1;
        [SetUp]
        public void Setup()
        {
            _repo = new SellerRepository(new EmartDBContext());
            _repo1 = new ItemRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetSellerProfile(4);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetSellerProfile(4);
            seller.Companyname = "Amazon";
            seller.Contactnumber = "9581719882";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetSellerProfile(4);
            Assert.AreSame(seller, seller1);

        }
        [Test]
        [Description("to Add item")]
        public void TestAddItem()
        {
            _repo1.AddItems(new Items()
            {
                Id = 3,
                ItemName = "pen",
                CategoryId = 72,
                SubcategoryId = 5,
                Description = "nothing",
                Imagepath = "4.jpg",
                StockNumber = 8,
                Price = 450,
                SellerId = 1,
                Remarks = "good"
            });
            var result = _repo1.GetItems(3);
            Assert.NotNull(result);

        }
        [Test]
        [Description("to test Get All Items")]
        public void TestGetAllItem()
        {
            var result = _repo1.GetAllItems();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test Get Item")]
        public void TestGetItem()
        {
            var result = _repo1.GetItems(74);
            Assert.IsNotNull(result);

        }
        [Test]
        [Description("to test Delete Item")]
        public void TestDeleteItems()
        {
            _repo1.DeleteItems(3);
            var x = _repo1.GetItems(3);
            Assert.Null(x);
        }
        [Test]
        [Description("to test update item")]
        public void TestUpdate()
        {
            Items i = _repo1.GetItems(97);
            i.ItemName = "pens";
            _repo1.UpdateItems(i);
            Items i1 = _repo1.GetItems(97);
            Assert.AreSame(i, i1);

        }
        [Test]
        [Description("to test View  Item")]
        public void TestViewItems()
        {
            var result = _repo1.ViewItems(1);
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo1.GetCategories();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetSubCategory()
        {
            var result = _repo1.GetSubCategories(14);
            Assert.NotNull(result);
            Assert.Greater(result.Count,0);
        }
    }
}
