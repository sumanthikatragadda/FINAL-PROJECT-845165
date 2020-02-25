using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly EmartDBContext _context;
        public CategoryRepository(EmartDBContext context)
        {
            _context = context;
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetSubCategory(int category_id)
        {
            return _context.SubCategory.Where(e => e.CategoryId == category_id).ToList();
        }

       
    }
}
