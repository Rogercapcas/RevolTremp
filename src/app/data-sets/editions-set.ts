import {Edition} from '../Models/edition';

const pictures1 = ['url(../../../assets/pictures2019/1.jpeg)', 'url(../../../assets/pictures2019/2.jpeg)'];
const mainpic =  ['url(../../../assets/pictures2019/cartell.jpeg)']
const e2019: Edition = new Edition(2019, 'prova1 de la edició 2019', pictures1, mainpic);

export let EDITIONS: Edition[];
EDITIONS = [e2019];
