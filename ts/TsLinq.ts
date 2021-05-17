export class TsLinqHandler {
   private arr: any[];
   public constructor(arr: any[]) {
      this.arr = arr;
   }
   public ToArray(): any[] {
      return this.arr;
   }
   public Where(exp: Function): TsLinqHandler {
      const b: any[] = [];
      this.arr.forEach((e, i) => { if (exp(e, i)) b.push(e); });
      return new TsLinqHandler(b);
   }
   public Count(exp: Function = undefined): number {
      if (exp === undefined) return this.arr.length;
      let b: number = 0;
      this.arr.forEach((e, i) => { if (exp(e, i)) b++; });
      return b;
   }
   public Sum(exp: Function): number {
      if (exp === undefined) exp = (e) => e;
      let b: number = 0;
      this.arr.forEach((e, i) => { b += exp(e, i); });
      return b;
   }
   public Select(exp: Function): TsLinqHandler {
      if (exp === undefined) return this;
      const b: any[] = [];
      this.arr.forEach((e, i) => { b.push(exp(e, i)); });
      return new TsLinqHandler(b);
   }
   public First(): any {
      if (this.arr.length === 0) return undefined;
      return this.arr[0];
   }
   public Join(separator: string): string {
      return this.arr.join(separator);
   }
}
