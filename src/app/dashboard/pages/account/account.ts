import {Transfer} from "../transactions/transfer";
import {Operation} from "../transactions/operation";

export class Account {
  id: number;
  balance: number;
  clientId: number;
  dateCreation: Date;
  number: string;
  type: string;
  transfers: Array<Transfer>;
  operations: Array<Operation>;


  constructor(id: number, balance: number, clientId: number, dateCreation: Date, number: string, type: string, transfers: Array<Transfer>, operations: Array<Operation>) {
    this.id = id;
    this.balance = balance;
    this.clientId = clientId;
    this.dateCreation = dateCreation;
    this.number = number;
    this.type = type;
    this.transfers = transfers;
    this.operations = operations;
  }
}

