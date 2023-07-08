import { usersAPI } from './api-users';
import {tradePostAPI} from './api-tradepost';
import {authAPI} from './api-auth';

export default [...authAPI, ...usersAPI, ...tradePostAPI];
