import { QueendocAuthorizationPage } from './app.po';

describe('queendoc-authorization App', function() {
  let page: QueendocAuthorizationPage;

  beforeEach(() => {
    page = new QueendocAuthorizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
