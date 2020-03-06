using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;
        }

        public void EditBuyerProfile(Buyer obj)
        {
            Buyer b = _context.Buyer.Find(obj.Id);
            b.Username = obj.Username;
            b.Password = obj.Password;
            b.Mobilenumber = obj.Mobilenumber;
            b.Emailid = obj.Emailid;
            //b.Createddatetime = obj.Createddatetime;

            //_context.Buyer.Update(b);
            _context.SaveChanges();
        }

        public Buyer GetBuyerProfile(int id)
        {
            return _context.Buyer.Find(id);
        }
    }
}
