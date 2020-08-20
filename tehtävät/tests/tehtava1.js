import { Selector } from 'testcafe';

fixture `Tehtävä 1`
    .page `../tehtava1.html`;

test('Toistorakenne korjattu', async t => {
   const tulosSelector = Selector("#tulos");

   await t
     .expect(tulosSelector.textContent).match(/^\s*1,?\s?2,?\s?3,?\s?4,?\s?5,?\s?6,?\s?7,?\s?8,?\s?9,?\s?10,?\s?11,?\s?$/,'luvut oikeassa järjestyksessä');
});