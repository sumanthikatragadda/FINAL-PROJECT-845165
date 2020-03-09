using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        void AddCategory(Category obj);
        void AddSubcategory(SubCategory obj);
        List<Category> GetAllCategories();
        List<SubCategory> GetAllSubCategories();
        public void DeleteCategory(int id);
        public void UpdateCategory(Category obj);
        public void DeleteSubcategory(int id);
        public void UpdateSubcategory(SubCategory obj);
        public Category GetCategorybyId(int id);
        public SubCategory GetSubCategorybyId(int id);


    }
}
