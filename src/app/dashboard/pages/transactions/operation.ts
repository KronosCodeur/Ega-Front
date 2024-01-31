export class Operation {
  id: number;
  makedAt: string;
  type: string;
  amount: number;

  constructor(id: number, makedAt: string, type: string, amount: number) {
    this.id = id;
    this.makedAt = makedAt;
    this.type = type;
    this.amount = amount;
  }
}
