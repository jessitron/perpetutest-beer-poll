import { Selector } from 'testcafe';

fixture("It works").page("https://stlouisbeers.glitch.me");

test("Displays the question", async t => {
    const question = await Selector("#question").innerText;

    return t.expect(question).eql("What are the best St. Louis beers?");
});
