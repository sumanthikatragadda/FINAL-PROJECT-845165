using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly EmartDBContext _context;
        public AccountRepository(EmartDBContext context)
        {
            _context = context;
        }
        public Buyer BuyerLogin(string uname, string pwd)
        {
            return _context.Buyer.SingleOrDefault(e=>e.Username==uname&&e.Password==pwd);
            
            
        }
        public List<Buyer> GetAllBuyer()
        {
            return _context.Buyer.ToList();
        }
        public List<Seller> GetAllSeller()
        {
            return _context.Seller.ToList();
        }

        public void RegisterBuyer(Buyer obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void RegisterSeller(Seller obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public Seller SellerLogin(string uname, string pwd)
        {
            return (_context.Seller.SingleOrDefault(e => e.Username == uname && e.Password == pwd));
            
        }

        
    }
}
