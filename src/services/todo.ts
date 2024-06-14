import { Todo } from "../entity/todo";
import { AppDataSource } from "../data-source";
import { ObjectId } from "mongodb";

export class TodoService {
  async create(todo: Partial<Todo>) {
    const createdTodo = AppDataSource.mongoManager.create(Todo, todo as Todo);
    const savedTodo = await this.save(createdTodo);
    return savedTodo;
  }

  getUserTodos(user_id: string) {
    return AppDataSource.mongoManager.find(Todo, {
      where: {
        user_id: {
          $eq: user_id,
        },
      },
      order: {
        createdAt: "DESC",
      },
    });
  }

  getAssignedTodos(user_id: string) {
    return AppDataSource.mongoManager.find(Todo, {
      where: {
        assignedTo: {
          $eq: user_id,
        },
      },
      order: {
        createdAt: "DESC",
      },
    });
  }

  getTodoById(id: string) {
    return AppDataSource.mongoManager.findOne(Todo, {
      where: {
        _id: {
          $eq: new ObjectId(id),
        },
      },
    });
  }

  getUserTodosByStatus(user_id: string, status: string) {
    return AppDataSource.mongoManager.find(Todo, {
      where: {
        user_id: {
          $eq: user_id,
        },
        status: {
          $eq: status,
        },
      },
      order: {
        createdAt: "DESC",
      },
    });
  }

  getAssignedTodosByStatus(user_id: string, status: string) {
    return AppDataSource.mongoManager.find(Todo, {
      where: {
        assignedTo: {
          $eq: user_id,
        },
        status: {
          $eq: status,
        },
      },
      order: {
        createdAt: "DESC",
      },
    });
  }

  async updateTodo(id: string, { status }: Todo) {
    let _todo = await this.getTodoById(id);
    _todo.status = status;
    return this.save(_todo);
  }

  async getProjectTodos(project_id: string) {
    return AppDataSource.mongoManager.find(Todo, {
      where: {
        object_id: {
          $eq: project_id,
        },
      },
    });
  }

  async deleteProjectTodos(project_id: string) {
    const todos = await this.getProjectTodos(project_id);
    await AppDataSource.mongoManager.deleteMany(Todo, todos);
    return { message: "Project todos deleted successfully!" };
  }

  save(todo: Todo) {
    return AppDataSource.mongoManager.save(todo);
  }
}

export default new TodoService();
