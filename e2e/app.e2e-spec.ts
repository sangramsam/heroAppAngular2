import { AngularClassStylePage } from './app.po';

describe('angular-class-style App', () => {
  let page: AngularClassStylePage;

  beforeEach(() => {
    page = new AngularClassStylePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
