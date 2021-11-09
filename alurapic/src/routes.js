import cadastro from "./Components/cadastro/cadastro.vue";
import home from "./Components/home/home.vue";
 
export const routes = [
  {path: '', component: home , titulo: 'Home'},
  {path: '/cadastro', component: cadastro , titulo: 'Cadastro'}
];
