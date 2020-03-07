using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }
        
        public void EditProfile(Seller obj)
        {
            Seller s = _context.Seller.Find(obj.Id);
            s.Username = obj.Username;
            s.Password = obj.Password;
            s.PostalAddress = obj.PostalAddress;
            s.Website = obj.Website;
            s.Gstin = obj.Gstin;
            s.Emailid = obj.Emailid;
            s.Companyname = s.Companyname;
            s.Contactnumber = s.Contactnumber;
            s.Briefaboutcompany = obj.Briefaboutcompany;
          //  _context.Seller.Update(obj); 
            _context.SaveChanges();
        }
         public Seller GetSellerProfile(int id)
        {
            return _context.Seller.Find(id);
        }


    }
}
