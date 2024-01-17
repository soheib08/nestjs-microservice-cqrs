export class LogPayload {}

export class Log {
  name: string;
  payload: LogPayload;
  constructor(name: string, payload: LogPayload) {
    this.name = name;
    this.payload = payload;
  }
}
