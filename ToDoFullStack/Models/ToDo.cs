using System;
using System.Collections.Generic;

namespace ToDoFullStack.Models
{
    public partial class ToDo
    {
        public int Id { get; set; }
        public string? Task { get; set; }
        public bool? Completed { get; set; }
    }
}
