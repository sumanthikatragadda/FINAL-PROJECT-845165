using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public interface IAccountRepository
    {
        
        bool BuyerLogin(string uname, string pwd);
        bool SellerLogin(string uname, string pwd);
        void RegisterBuyer(Buyer obj);
        void RegisterSeller(Seller obj);

    }
}
