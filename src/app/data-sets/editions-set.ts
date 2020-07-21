import {Edition} from '../Models/edition';

const pictures1 = ['url(../../../assets/resources/lis1.png)', 'url(../../../assets/resources/lis2.png'];
const e2019: Edition = new Edition(2019, 'prova1 de la edició 2019', pictures1);

export let EDITIONS: Edition[];
EDITIONS = [e2019];
