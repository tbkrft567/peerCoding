﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace StoreFrontApp.Model
{
    public class User
    {
        public int UserId { get; set; }
        public string name { get; set; }
    }
}
