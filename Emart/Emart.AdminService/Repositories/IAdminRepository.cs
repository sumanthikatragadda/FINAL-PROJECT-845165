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
    }
}
