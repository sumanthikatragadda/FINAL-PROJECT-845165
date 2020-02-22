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
    }
}
