export interface Product{ /**public keyword'ün karşılığı export'dur TypeScript de. Interface'ler olayı sınırlandırmak için 
kullanılıyor. Interface'lerin önüne I koymuyouz javadada koyulmaz .Net dünyasında interfacelerin önüne I harfi koyulur.*/
    productId:number;/**int vb. yok number oluyor sayısal değerler */
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}