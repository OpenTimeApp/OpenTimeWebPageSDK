import { OpentimeWebpageSdkPage } from './app.po';

describe('opentime-webpage-sdk App', function() {
  let page: OpentimeWebpageSdkPage;

  beforeEach(() => {
    page = new OpentimeWebpageSdkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
