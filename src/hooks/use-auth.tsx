import React from 'react';
import { AuthContext, IAuthStore } from '../contexts';

export const useAuth = () => React.useContext<IAuthStore>(AuthContext);
