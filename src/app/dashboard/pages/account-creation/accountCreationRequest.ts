export class AccountCreationRequest {
  type: string;
  userId: number;


  constructor(type: string, userId: number) {
    this.type = type;
    this.userId = userId;
  }
}
