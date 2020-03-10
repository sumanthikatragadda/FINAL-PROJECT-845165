using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly EmartDBContext _context;
        public TransactionRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void BuyItem(PurchaseHistory item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }

        public List<PurchaseHistory> TransactionHistory(int id)
        {
            return _context.PurchaseHistory.Where(e => e.BuyerId == id).ToList();
        }
        public void AddtoCart(Cart item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }
        public List<Cart> GetCart()
        {
            return _context.Cart.ToList();
        }
        public void DeleteCart(int id)
        {
            Cart i = _context.Cart.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

    }
}
