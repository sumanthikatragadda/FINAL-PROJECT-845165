using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Discounts
    {
        public int Id { get; set; }
        public string DiscountCode { get; set; }
        public string Percentage { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; }
    }
}
