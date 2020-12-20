export class Deferred<T extends any = any> {
  private _resolve: any;
  // @ts-ignore
  resolve(...value: T extends undefined ? [] : [T]): void
  resolve(value?: any): void {
    this._resolve(value);
  };
  reject!: (reason?: any) => void;
  promise: Promise<T>;
  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this._resolve = resolve;
      this.reject = reject;
    });
  }

  static resolve(): Deferred<undefined>
  static resolve<T>(value: T): Deferred<T>
  static resolve(value?: any): Deferred<any> {
    const deferred = new Deferred<any>();
    deferred.resolve(value);
    return deferred;
  }
  static reject<T=any>(reason?: any): Deferred<T> {
    const deferred = new Deferred<T>();
    deferred.reject(reason);
    return deferred;
  }
}