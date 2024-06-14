export enum TODO_ROUTES {
  CREATE = "/todo/create",
  USER_TODO = "/todo/user/:user_id/:status",
  ASSIGNED_TODO = "/todo/assigned/:user_id/:status",
  TODO = "/todo/id/:id",
}

export enum NOTIFICATION_ROUTES {
  NOTIFICATION = "/notification/id/:id",
  USER_NOTIFICATION = "/notification/user/:user_id",
}
