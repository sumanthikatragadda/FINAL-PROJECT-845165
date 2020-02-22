using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Transactions
    {
        public int Id { get; set; }
        public string TransactionType { get; set; }
        public DateTime DateTime { get; set; }
        public string Remarks { get; set; }
    }
}
