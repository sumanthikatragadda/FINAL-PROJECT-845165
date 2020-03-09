using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Emailid { get; set; }
        public string Mobilenumber { get; set; }
        public DateTime Createddatetime { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
