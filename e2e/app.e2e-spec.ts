import { IgniteAuAngularTestingPage } from './app.po';

describe('ignite-au-angular-testing App', function() {
  let page: IgniteAuAngularTestingPage;

  beforeEach(() => {
    page = new IgniteAuAngularTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
