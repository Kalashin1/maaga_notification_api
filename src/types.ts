import { ObjectId } from "typeorm";

export interface INotification {
  _id: ObjectId;
  user_id: string;
  shortText: string;
  objectId?: string /* this is the primary object on which this notification happens, it is closely related to the type of the NOTIFICATION */;
  subjectId?: string /* This is the secondary object which this notification happens, it helpes to construct a second param in case where the frontend needs to fetch resource from a route which is like route/:objectId/:subjectId */;
  fileUrl?: string;
  isRead: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export const TASK_STATUS = [
  "ASSIGNED",
  "IN-PROGRESS",
  "COMPLETED",
  "OVER-DUE",
] as const;

export const TASK_TYPE = [
  "PROJECT",
  "DRAFT",
  "ADDENDUM",
  "INVOICE",
  "CONTRACT",
  "SHOP",
  "SHOP_DRAFT",
] as const;

export const TODO_SUB_TYPE = [
  "MAIN_ORDER_ITEM",
  "ADDENDUM",
  "PROJECT_STATUS_UPDATE",
  "CONTRACT_ACCEPTANCE",
  "DRAFT_ACCEPTANCE",
  "INVOICE_ACCEPTANCE",
  "CUSTOMER_REGISTRATION",
];

export interface Todo {
  _id: ObjectId;
  user_id: string;
  type: (typeof TASK_TYPE)[number];
  sub_type: (typeof TODO_SUB_TYPE)[number];
  description?: string;
  status: (typeof TASK_STATUS)[number];
  object_id: string;
  createdAt?: string;
  updatedAt?: string;
  assignedTo: string;
  dueDate?: string;
}
