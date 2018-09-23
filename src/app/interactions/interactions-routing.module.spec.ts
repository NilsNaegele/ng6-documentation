import { InteractionsRoutingModule } from './interactions-routing.module';

describe('InteractionsRoutingModule', () => {
  let interactionsRoutingModule: InteractionsRoutingModule;

  beforeEach(() => {
    interactionsRoutingModule = new InteractionsRoutingModule();
  });

  it('should create an instance', () => {
    expect(interactionsRoutingModule).toBeTruthy();
  });
});
