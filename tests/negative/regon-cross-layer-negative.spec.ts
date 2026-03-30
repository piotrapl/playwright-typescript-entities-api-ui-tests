import { test } from '../../fixtures/test-fixtures';
import { invalidRegons } from '../../data/invalid-regons';

for (const dataset of invalidRegons) {

    
  test(`REGON negative search: ${dataset.regon}`, async ({ regonFlow }) => {

        const result = await regonFlow.searchRegonAndVerify(dataset.regon);

        result.assert();

  });

}