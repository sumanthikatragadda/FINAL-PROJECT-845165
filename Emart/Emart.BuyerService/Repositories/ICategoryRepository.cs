using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public interface ICategoryRepository
    {
        public List<Category> GetCategory();
        public List<SubCategory> GetSubCategory(int category_id);
    }
}
