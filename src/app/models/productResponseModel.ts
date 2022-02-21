import { Product } from "./product";
import { ResponseModel } from "./responseModel";

/** Alacağımız veriyi burada modelliyoruz. */
export interface ProductResponseModel extends ResponseModel //*Extends ile inheritance ettik.
{/**API den bize product tipince birden fazla veri geliyor o yüzden Product[] array şeklinde yaptık.
    Bunun yanında işlem başaralımı değil mi cevabı geliyor success birde mesaj geliyor.
    success ve message tüm gelen verilerde sabit old. için ResponseModel.ts dosyasına aktardık*/
    data:Product[],
   
}