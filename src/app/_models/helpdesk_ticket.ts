export class HelpdeskTicket {
  id: number;
  creatorId: number;
  title?: string;
  department?: string;
  phone?: string;
  subject: string;
  description: string;
  dateCreated: string;
  status: string; // 'open', 'read', 'closed'
  productId: number;
  categoryId: number;
  priorityId: number;
}

export class HelpdeskComment {
  id: number;
  ticketId: number;
  userId: number;
  dateCreated: string;
  type: string; // 'admin', 'user'
  title: string;
  comment: string;
}

export class HelpdeskAttachment {
  id: number;
  commentId: number;
  filename: string;
  filepath: string;
  filesize: number;
  filetype: string;
}
