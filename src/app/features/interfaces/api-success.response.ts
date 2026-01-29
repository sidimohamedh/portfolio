export interface ApiSuccessResponse<T> {
  message_status: string;
  data: T;
}

export interface Message {
  id: number;
  name: string;
  number: string;
  message: string;
  createdAt: string;
}
