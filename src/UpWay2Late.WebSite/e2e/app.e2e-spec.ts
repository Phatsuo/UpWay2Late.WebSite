import { Upway2lateWebsitePage } from './app.po';

describe('upway2late-website App', function() {
  let page: Upway2lateWebsitePage;

  beforeEach(() => {
    page = new Upway2lateWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
