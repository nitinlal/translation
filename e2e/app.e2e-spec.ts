import { TranslationPage } from './app.po';

describe('translation App', function() {
  let page: TranslationPage;

  beforeEach(() => {
    page = new TranslationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
