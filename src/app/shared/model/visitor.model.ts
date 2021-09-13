import { Timestamp } from "rxjs";
import { TimeoutErrorCtor } from "rxjs/internal/util/TimeoutError";

export class Visitor {
    public id: number;
    public name: string;
    public phone:string;
    public address:string;
    public checkinTime: string;
    public checkoutTime:string;
    public checkinStatus: boolean;
  }