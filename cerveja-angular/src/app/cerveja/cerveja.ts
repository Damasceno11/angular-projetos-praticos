import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Interface para tipar cervejas
interface ICerveja {
  nome: string;
  tipo: 'Ale' | 'Lager' | 'Mista';
  estilo: string;
  cor: 'Clara' | 'Amber' | 'Escura';
  amargor: 'Suave' | 'Médio' | 'Alto';
  corpo: 'Leve' | 'Médio' | 'Encorpada';
  teor: number; // % ABV
  imagem: string;
}

// Interface para filtros
interface IFiltro {
  tipo: '' | 'Ale' | 'Lager' | 'Mista';
  estilo: string;
  cor: '' | 'Clara' | 'Amber' | 'Escura';
  amargor: '' | 'Suave' | 'Médio' | 'Alto';
  corpo: '' | 'Leve' | 'Médio' | 'Encorpada';
  teor: string; // valor numérico como string
}

@Component({
  selector: 'app-cerveja',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cerveja.html',
  styleUrls: ['./cerveja.css'],
})
export class Cerveja {
  // ====== Cervejas ======
  cervejas: ICerveja[] = [
    {
      nome: 'Eisenbahn Pilsen',
      tipo: 'Lager',
      estilo: 'Pilsen',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.8,
      imagem: 'assets/cervejas/eisenbahn-pilsen.jpg',
    },
    {
      nome: 'Eisenbahn IPA',
      tipo: 'Ale',
      estilo: 'IPA',
      cor: 'Amber',
      amargor: 'Alto',
      corpo: 'Médio',
      teor: 6.5,
      imagem: 'assets/cervejas/eisenbahn-ipa.jpg',
    },
    {
      nome: 'Blumenau Sun of Peach',
      tipo: 'Ale',
      estilo: 'Catharina Sour',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.0,
      imagem: 'assets/cervejas/blumenau-sun-of-peach.jpg',
    },
    {
      nome: 'Bierbaum Bock',
      tipo: 'Lager',
      estilo: 'Bock',
      cor: 'Escura',
      amargor: 'Médio',
      corpo: 'Encorpada',
      teor: 6.8,
      imagem: 'assets/cervejas/bierbaum-bock.jpg',
    },
    {
      nome: 'Erdinger Weissbier',
      tipo: 'Ale',
      estilo: 'Hefeweizen',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Médio',
      teor: 5.3,
      imagem: 'assets/cervejas/erdinger-weissbier.jpg',
    },
    {
      nome: 'Heineken Premium Lager',
      tipo: 'Lager',
      estilo: 'Premium Lager',
      cor: 'Clara',
      amargor: 'Médio',
      corpo: 'Leve',
      teor: 5.0,
      imagem: 'assets/cervejas/heineken-premium-lager.jpg',
    },
    {
      nome: 'Hoegaarden Witbier',
      tipo: 'Ale',
      estilo: 'Witbier',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.9,
      imagem: 'assets/cervejas/hoegaarden-witbier.jpg',
    },
    {
      nome: 'Guinness Draught',
      tipo: 'Ale',
      estilo: 'Stout',
      cor: 'Escura',
      amargor: 'Médio',
      corpo: 'Encorpada',
      teor: 4.2,
      imagem: 'assets/cervejas/guinness-draught.jpg',
    },
    {
      nome: 'Stella Artois',
      tipo: 'Lager',
      estilo: 'European Pale Lager',
      cor: 'Clara',
      amargor: 'Médio',
      corpo: 'Leve',
      teor: 5.0,
      imagem: 'assets/cervejas/stella-artois.jpg',
    },
    {
      nome: 'Budweiser',
      tipo: 'Lager',
      estilo: 'American Lager',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 5.0,
      imagem: 'assets/cervejas/budweiser.jpg',
    },
    {
      nome: 'Corona Extra',
      tipo: 'Lager',
      estilo: 'American Lager',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.6,
      imagem: 'assets/cervejas/corona-extra.jpg',
    },
    {
      nome: 'Paulaner Hefe-Weißbier',
      tipo: 'Ale',
      estilo: 'Hefeweizen',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Médio',
      teor: 5.5,
      imagem: 'assets/cervejas/paulaner-hefeweissbier.jpg',
    },
    {
      nome: 'Duchesse de Bourgogne',
      tipo: 'Mista',
      estilo: 'Flanders Red Ale',
      cor: 'Amber',
      amargor: 'Médio',
      corpo: 'Médio',
      teor: 6.2,
      imagem: 'assets/cervejas/duchesse-de-bourgogne.jpg',
    },
    {
      nome: 'Rodenbach Grand Cru',
      tipo: 'Mista',
      estilo: 'Flanders Red Ale',
      cor: 'Amber',
      amargor: 'Médio',
      corpo: 'Encorpada',
      teor: 6.0,
      imagem: 'assets/cervejas/rodenbach-grand-cru.jpg',
    },
    {
      nome: 'Leffe Blonde',
      tipo: 'Ale',
      estilo: 'Belgian Blonde Ale',
      cor: 'Amber',
      amargor: 'Médio',
      corpo: 'Médio',
      teor: 6.6,
      imagem: 'assets/cervejas/leffe-blonde.jpg',
    },
    {
      nome: 'Duvel',
      tipo: 'Ale',
      estilo: 'Belgian Strong Golden Ale',
      cor: 'Clara',
      amargor: 'Médio',
      corpo: 'Médio',
      teor: 8.5,
      imagem: 'assets/cervejas/duvel.jpg',
    },
    {
      nome: 'Chimay Blue (Grande Réserve)',
      tipo: 'Ale',
      estilo: 'Belgian Strong Dark Ale',
      cor: 'Escura',
      amargor: 'Médio',
      corpo: 'Encorpada',
      teor: 9.0,
      imagem: 'assets/cervejas/chimay-blue.jpg',
    },
    {
      nome: 'Tripel Karmeliet',
      tipo: 'Ale',
      estilo: 'Tripel',
      cor: 'Clara',
      amargor: 'Médio',
      corpo: 'Médio',
      teor: 8.4,
      imagem: 'assets/cervejas/tripel-karmeliet.jpg',
    },
    {
      nome: 'Colorado Indica IPA',
      tipo: 'Ale',
      estilo: 'IPA',
      cor: 'Amber',
      amargor: 'Alto',
      corpo: 'Médio',
      teor: 7.0,
      imagem: 'assets/cervejas/colorado-indica.jpg',
    },
    {
      nome: 'Baden Baden Chocolate',
      tipo: 'Ale',
      estilo: 'Porter (Chocolate)',
      cor: 'Escura',
      amargor: 'Médio',
      corpo: 'Encorpada',
      teor: 6.0,
      imagem: 'assets/cervejas/baden-baden-chocolate.jpg',
    },
    {
      nome: 'Wäls Witbier',
      tipo: 'Ale',
      estilo: 'Witbier',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.5,
      imagem: 'assets/cervejas/wals-witbier.jpg',
    },
    {
      nome: 'Brahma Chopp',
      tipo: 'Lager',
      estilo: 'Pilsen',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.8,
      imagem: 'assets/cervejas/brahma-chopp.jpg',
    },
    {
      nome: 'Skol Pilsen',
      tipo: 'Lager',
      estilo: 'Pilsen',
      cor: 'Clara',
      amargor: 'Suave',
      corpo: 'Leve',
      teor: 4.7,
      imagem: 'assets/cervejas/skol-pilsen.jpg',
    },
    {
      nome: "Beck's Pilsner",
      tipo: 'Lager',
      estilo: 'Pilsner',
      cor: 'Clara',
      amargor: 'Médio',
      corpo: 'Leve',
      teor: 5.0,
      imagem: 'assets/cervejas/becks-pilsner.jpg',
    },
    {
      nome: 'Lagunitas IPA',
      tipo: 'Ale',
      estilo: 'IPA',
      cor: 'Amber',
      amargor: 'Alto',
      corpo: 'Médio',
      teor: 6.2,
      imagem: 'assets/cervejas/lagunitas-ipa.jpg',
    },
    {
      nome: 'Sierra Nevada Pale Ale',
      tipo: 'Ale',
      estilo: 'American Pale Ale',
      cor: 'Amber',
      amargor: 'Médio',
      corpo: 'Médio',
      teor: 5.6,
      imagem: 'assets/cervejas/sierra-nevada-pale-ale.jpg',
    },
    {
      nome: 'Newcastle Brown Ale',
      tipo: 'Ale',
      estilo: 'Brown Ale',
      cor: 'Amber',
      amargor: 'Médio',
      corpo: 'Médio',
      teor: 4.7,
      imagem: 'assets/cervejas/newcastle-brown-ale.jpg',
    },
  ];

  // ====== Lista exibida (inicia com todas) ======
  cervejasFiltradas: ICerveja[] = [...this.cervejas];

  // ====== Objeto de filtros ======
  filtro: IFiltro = {
    tipo: '',
    estilo: '',
    cor: '',
    amargor: '',
    corpo: '',
    teor: '',
  };

  // ====== Aplicar filtros ======
  aplicarFiltros(): void {
    const minTeor = this.filtro.teor ? parseFloat(this.filtro.teor) : null;

    this.cervejasFiltradas = this.cervejas.filter((c) => {
      const matchTipo = !this.filtro.tipo || c.tipo === this.filtro.tipo;
      const matchEstilo =
        !this.filtro.estilo || c.estilo.toLowerCase().includes(this.filtro.estilo.toLowerCase());
      const matchCor =
        !this.filtro.cor || c.cor.toLowerCase().includes(this.filtro.cor.toLowerCase());
      const matchAmargor =
        !this.filtro.amargor || c.amargor.toLowerCase().includes(this.filtro.amargor.toLowerCase());
      const matchCorpo =
        !this.filtro.corpo || c.corpo.toLowerCase().includes(this.filtro.corpo.toLowerCase());
      const matchTeor = minTeor === null || c.teor >= minTeor;

      return matchTipo && matchEstilo && matchCor && matchAmargor && matchCorpo && matchTeor;
    });
  }

  // ====== Limpar filtros ======
  limparFiltros(): void {
    this.filtro = {
      tipo: '',
      estilo: '',
      cor: '',
      amargor: '',
      corpo: '',
      teor: '',
    };
    this.cervejasFiltradas = [...this.cervejas];
  }

  getBadgeClass(tipo: string): string {
    switch (tipo) {
      case 'Ale':
        return 'ale';
      case 'Lager':
        return 'lager';
      case 'Mista':
        return 'mista';
      default:
        return 'amber';
    }
  }
}
