
import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'vue d\'ensemble',
          icon: "fa-solid fa-chart-pie",
          url: ''
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-column',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: '',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'allure du stock',
          icon: 'fab fa-stack-overflow',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'clients',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: '',
          url: ''
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-regular fa-basket-shopping',
          url: ''
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-sharp fa-solid fa-truck',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: '',
          url: ''
        },
        {
          id: '42',
          titre: 'Commandes fourni',
          icon: '',
          url: ''
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fa-solid fa-gears',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: '',
          url: ''
        },
        {
          id: '52',
          titre: 'Utilisateur',
          icon: '',
          url: ''
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}

