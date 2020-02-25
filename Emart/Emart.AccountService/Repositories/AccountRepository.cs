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
        public bool BuyerLogin(string uname, string pwd)
        {
            var b= _context.Buyer.SingleOrDefault(e=>e.Username==uname&&e.Password==pwd);
            if(b!=null)
            {
                return true;
            }
            else
            {
                return false;
            }
            
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

        public bool SellerLogin(string uname, string pwd)
        {
            Seller b = _context.Seller.SingleOrDefault(e => e.Usename == uname && e.Password == pwd);
            if (b != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
