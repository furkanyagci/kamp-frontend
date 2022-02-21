import { Component } from '@angular/core'; /**component dekralosyonu kullanabilmek için bu şkilde import etmeliyiz c# daki using gibi */
/**
 *  *** app.component.ts data'yı yönettiğimiz yer
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** Angularda herşey classdır. Angular nesne güdümlü bir yapıya sahiptir. Herşey classlar üzerine kuruludur.
   *** Angularda component demek Html'in datasını yönettiğimiz yerdir. Madem herşey class componenti nasıl ayırt edeceğiz ?
    declarasyon dediğimiz c# tan attributeleri hatırlayın classa çalışma anında anlam yükleyen imzalardır c# da köşeli
    parantez ile yapıyoruz burada @ işareti ile yapıyoruz. Aşağıdaki örnek declarasyondur. Süslü parantez açılıp kapanmış 
    süslü parantez demek Javascript de obje demektir nasıl c# da product class'ın var nasıl kategori clasın var aynı onun gibi.
  @Component({
  selector: 'app-root', bu kod bu componenti html sayfasına çekmek için kullanılır. index.html <app-root></app-root> yazarız.
  templateUrl: './app.component.html', bu kod ile kimin componenti old. söylüyoruz. app.componenthtml nin datasını yönetecek 
  komponentsin diyoruz. ./ aynı klasör demek yani app.component.ts ile aynı klasördeki app.component.html demek.
  styleUrls: ['./app.component.css'] bu html'nin css dosyaları köşeli parantez ise dizi demek birden fazla css olabilir.
  })

*/
export class AppComponent {
   title = 'northwind'; //* string title ="northwind" yazarız. TypeScript de. Angular da title:string = 'northwind'; yazılır.
   user: string = 'Engin Demiroğ';
  // product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 };
  // product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 };
  // product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5 };
  // product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 };
  // product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 };

  // //*this anahtar kelimesi Javascript de sert'tir C# ve java daki gibi rahat edemezsiniz.
  // products = [this.product1, this.product2, this.product3, this.product4, this.product5];

}
