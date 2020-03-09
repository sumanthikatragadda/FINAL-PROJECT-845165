using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Category.Add(obj);
            _context.SaveChanges();

        }

        public void AddSubcategory(SubCategory obj)
        {
            _context.SubCategory.Add(obj);
            _context.SaveChanges();

        }

        public void DeleteCategory(int id)
        {
            Category i = _context.Category.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public void DeleteSubcategory(int id)
        {
            SubCategory i = _context.SubCategory.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }

        public Category GetCategorybyId(int id)
        {
            return _context.Category.Find(id);
        }

        public List<SubCategory> GetAllSubCategories()
        {
            return _context.SubCategory.ToList();
        }

        public SubCategory GetSubCategorybyId(int id)
        {
            return _context.SubCategory.Find(id);
        }

        public void UpdateCategory(Category obj)
        {
            _context.Category.Update(obj);
            _context.SaveChanges();
        }

        public void UpdateSubcategory(SubCategory obj)
        {
            _context.SubCategory.Update(obj);
            _context.SaveChanges();
        }
    }
}
