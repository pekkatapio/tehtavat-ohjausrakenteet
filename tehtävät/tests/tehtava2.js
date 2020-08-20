import { Selector } from 'testcafe';

fixture `Tehtävä 2`
    .page `../tehtava2.html`;

test('Luku kymmenkertaistuu', async t => {
   const kentta = Selector("#kentta");
   const nappi = Selector("#nappi");
   const syote = Selector("#syote");
   const tulos = Selector("#tulos");
   const luku = Math.floor(Math.random()*100);
   const syoteluku = luku.toString();
   const tulosluku = (luku * 10).toString();

   await t
     .typeText('#kentta', syoteluku)
     .click(nappi)
     .expect(syote.textContent).eql(syoteluku)
     .expect(tulos.textContent).eql(tulosluku);
});

test('Luku puolittuu', async t => {
   const kentta = Selector("#kentta");
   const nappi = Selector("#nappi");
   const syote = Selector("#syote");
   const tulos = Selector("#tulos");
   const luku = Math.floor(Math.random()*100) + 100;
   const syoteluku = luku.toString();
   const tulosluku = (luku * 2).toString();

   await t
     .typeText('#kentta', syoteluku)
     .click(nappi)
     .expect(syote.textContent).eql(syoteluku)
     .expect(tulos.textContent).eql(tulosluku);
});