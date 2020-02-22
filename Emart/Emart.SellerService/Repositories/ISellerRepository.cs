using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public interface ISellerRepository
    {
       
        public void EditProfile(Seller obj);
        
        public Seller GetSellerProfile(int id);
    }
}
