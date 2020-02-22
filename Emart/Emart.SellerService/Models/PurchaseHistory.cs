using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class PurchaseHistory
    {
        public int Id { get; set; }
        public string TransactionType { get; set; }
        public int NumberOfItems { get; set; }
        public DateTime DateTime { get; set; }
        public string Remarks { get; set; }
        public int? BuyerId { get; set; }
        public int? SellerId { get; set; }
        public int? ItemId { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
