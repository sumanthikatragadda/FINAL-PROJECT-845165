using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public interface IItemRepository
    {
        List<Items> GetAllItems();
        List<Items> ViewItems(int sid);
        public void DeleteItems(int id);
        public void UpdateItems(Items obj);
        public Items GetItems(int id);
        public void AddItems(Items obj);
    }
}
