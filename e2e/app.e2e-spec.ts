import { Angular2webapiPage } from './app.po';

describe('angular2webapi App', function() {
  let page: Angular2webapiPage;

  beforeEach(() => {
    page = new Angular2webapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
