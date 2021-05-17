   export class Kód {
      public K: string;
      public Ssz: string;
      static Db: number = 0;
      constructor(sor: string) {
         this.K = sor;
         this.Ssz = (++Kód.Db).toString();
      }
      public get IsmétlésVan(): boolean {
         for (let i: number = 0; i < this.K.length; i++) {
            for (let j: number = 0; j < this.K.length; j++) {
               if (j !== i && this.K[i] === this.K[j]) return true;
            }
         }
         return false;
      }
      public Minősít(próba: string): string {
         if (this.K.length !== próba.length) {
            return " hibás hossz";
         }
         return this.Eltérés(próba) ? " sikeres" : " hibás kódszám";
      }
      public static Generál(hossz: number): string {
         const h: Array<string> = new Array<string>();
         while (h.length !== hossz) {
            h.push((Math.floor(Math.random() * 10) + 48).toString());
         }
         return h.join("");
      }
      public Eltérés(proba: string): boolean {
         let egyezik: boolean = this.K.length === proba.length;
         if (egyezik) {
            const elteres: number = this.K.charCodeAt(0) - proba.charCodeAt(0);
            for (let i: number = 1; i < this.K.length; i++) {
               const aktElteres: number = this.K.charCodeAt(i) - proba.charCodeAt(i);
               const diff: number = elteres - aktElteres;
               if (diff % 10 !== 0) {
                  egyezik = false;
               }
            }
         }
         return egyezik;
      }
      public static ResetSorszam(): void {
         this.Db = 0;
      }
   }
