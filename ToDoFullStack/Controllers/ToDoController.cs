using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoFullStack.Models;

namespace ToDoFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        ToDoContext db = new ToDoContext();

        [HttpGet("GetToDos")]
        public List<ToDo> GetToDos()
        {
            return db.ToDos.ToList();
        }

        [HttpGet("GetToDoById/{id}")]
        public ToDo GetToDoById(int id)
        {
            return db.ToDos.Where(x => x.Id == id).First();
        }

        [HttpGet("SearchByTask/{task}")]
        public List<ToDo> SearchByTask(string task)
        {
            return db.ToDos.Where(x => x.Task == task).ToList();
        }

        //TEST AND REFINE BOOL VS STRING
        [HttpGet("SearchByCompleted/{completed}")]
        public List<ToDo> SearchByCompleted(string completed)
        {

            if (completed == "completed")
            {
                return db.ToDos.Where(x => x.Completed == true).ToList();
            }
            else
            {
                return db.ToDos.Where(x => x.Completed == false).ToList();
            }
        }

        [HttpPost("CreateToDo")]
        public string CreateToDo(ToDo x)
        {
            db.ToDos.Add(x);
            db.SaveChanges();
            return x.Task + "has been successfully added to the database.";
        }

        [HttpDelete("DeleteToDo/{id}")]
        public string DeleteToDo(int id)
        {
            ToDo x = db.ToDos.Find(id);
            db.ToDos.Remove(x);
            db.SaveChanges();
            return x.Task + "has been successfully removed from the database.";
        }

        [HttpPut("UpdateToDo/{id}")]
        public string UpdateToDo(int id, ToDo updatedToDo)
        {
            ToDo x = db.ToDos.Find(id);

            x.Task = updatedToDo.Task;
            x.Completed = updatedToDo.Completed;

            db.ToDos.Update(x);
            db.SaveChanges();

            return $"The task {x.Task} has been updated at id: {x.Id}";
        }

    }
}
