import {State, Action, Selector, StateContext, NgxsAfterBootstrap} from '@ngxs/store';
import { ImmutableContext, ImmutableSelector } from '@ngxs-labs/immer-adapter';

export class AddOnline {
  static readonly type = 'AddOnline';
}

export class AddOffline {
  static readonly type = 'AddOffline';
}

export class RemoveOnline {
  static readonly type = 'RemoveOnline';
}

export class RemoveOffline {
  static readonly type = 'RemoveOffline';
}

export interface CountStateModel {
  online: number;
  offline: number;
}

@State<CountStateModel>({
  name: 'count',
  defaults: {
    online: 0,
    offline: 0
  }
})
export class CountState implements NgxsAfterBootstrap {

  @Selector()
  static getOnline(state: CountStateModel) {
    return state.online;
  }

  @Selector()
  static getOffline(state: CountStateModel) {
    return state.offline;
  }

  ngxsAfterBootstrap(ctx: StateContext<CountStateModel>) {
    console.log('Count State initialized');
  }

  @ImmutableContext()
  @Action(AddOnline)
  addOnline(ctx: StateContext<CountStateModel>) {
    ctx.setState((state: CountStateModel) => {
      state.online++;
      return state;
    });
  }

  @ImmutableContext()
  @Action(AddOffline)
  addOffline(ctx: StateContext<CountStateModel>) {
    ctx.setState((state: CountStateModel) => {
      state.offline++;
      return state;
    });
  }

  @ImmutableContext()
  @Action(RemoveOnline)
  removeOnline(ctx: StateContext<CountStateModel>) {
    ctx.setState((state: CountStateModel) => {
      state.online--;
      return state;
    });
  }

  @ImmutableContext()
  @Action(RemoveOffline)
  removeOffline(ctx: StateContext<CountStateModel>) {
    ctx.setState((state: CountStateModel) => {
      state.offline--;
      return state;
    });
  }
}
