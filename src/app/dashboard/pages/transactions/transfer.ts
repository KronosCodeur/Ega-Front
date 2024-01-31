export class Transfer {
  id: number;
  makedAt: string;
  amount: number;

  constructor(id: number, makedAt: string, amount: number) {
    this.id = id;
    this.makedAt = makedAt;
    this.amount = amount;
  }
}
