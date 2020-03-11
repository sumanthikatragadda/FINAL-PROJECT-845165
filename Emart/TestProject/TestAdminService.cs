using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using NUnit.Framework;

namespace TestProject
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AdminRepository(new EmartDBContext());

        }
        [Test]
        [Description("to Add category")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId = 2,
                CategoryName = "Kids",
                BriefDetails = "products"

            });

        }
        [Test]
        [Description("to Add subcategory")]
        public void TestAddSubCategory()
        {
            _repo.AddSubcategory(new SubCategory()
            {
                SubcategoryId=4,
                CategoryId = 1,
                SubcategoryName = "Kids",
                BriefDetails = "products",
                Gst="10%"

            });

        }
        [Test]
        public void TestGetAllCategory()
        {
            var result = _repo.GetAllCategories();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetAllSubCategory()
        {
            var result = _repo.GetAllSubCategories();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetCategorybyid()
        {
            var result = _repo.GetCategorybyId(14);
            Assert.NotNull(result);
           
        }
        [Test]
        public void TestGetSubCategorybyid()
        {
            var result = _repo.GetSubCategorybyId(5);
            Assert.NotNull(result);
           
        }
        [Test]
        [Description("to test Delete Category")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(2);
            var x = _repo.GetCategorybyId(2);
            Assert.Null(x);
        }
        [Test]
        [Description("to test Delete Subcategory")]
        public void TestDeleteSubCategory()
        {
            _repo.GetSubCategorybyId(5);
            var x = _repo.GetSubCategorybyId(72);
            Assert.Null(x);
        }
        [Test]
        [Description("to test update category")]
        public void TestUpdateCategory()
        {
            Category i = _repo.GetCategorybyId(14);
            i.BriefDetails = "products";
            _repo.UpdateCategory(i);
            Category i1 = _repo.GetCategorybyId(14);
            Assert.AreSame(i, i1);

        }
        [Test]
        [Description("to test update subcategory")]
        public void TestUpdateSubCategory()
        {
            SubCategory i = _repo.GetSubCategorybyId(10);
            i.BriefDetails = "products";
            _repo.UpdateSubcategory(i);
            SubCategory i1 = _repo.GetSubCategorybyId(10);
            Assert.AreSame(i, i1);

        }
    }
}
