import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service.service';
import { ToastrService } from 'ngx-toastr';

export const guardGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const tostr = inject(ToastrService);

  if (accountService.currentUser())
  {
    return true;
  }
  else
  {
    tostr.error('You are not authrozed');
    return false;
  }
};
