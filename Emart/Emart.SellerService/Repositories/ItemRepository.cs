using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly EmartDBContext _context;
        public ItemRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteItems(int id)
        {
            Items i = _context.Items.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }

        public Items GetItems(int id)
        {
            return _context.Items.Find(id);
        }

        public void UpdateItems(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(int sid)
        {
            return _context.Items.Where(e=>e.SellerId==sid).ToList();
        }
    }
}
