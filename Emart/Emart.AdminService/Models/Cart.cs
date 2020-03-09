using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Cart
    {
        public int Id { get; set; }
        public int? Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Stocknumber { get; set; }
        public string Remarks { get; set; }
        public string Imagepath { get; set; }
        public int? Itemid { get; set; }
        public int? Buyerid { get; set; }
        public int? Sellerid { get; set; }
        public int? Categoryid { get; set; }
        public int? Subcategoryid { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
    }
}
