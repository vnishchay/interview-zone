/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  DEVICE_SECRET:'myjwtdevicesecret',
  CLIENT_SECRET:'myjwtclientsecret',
  EXPIRES_IN: 10000
};

const USER_ROLE = {
  Admin :1,
  User:2,
};

const PLATFORM = {
  ADMIN:1,
  DEVICE:2,
  CLIENT:3,
};

let LOGIN_ACCESS = {
  [USER_ROLE.Admin]:[PLATFORM.ADMIN],        
  [USER_ROLE.User]:[PLATFORM.DEVICE,PLATFORM.CLIENT],        
};

const DEFAULT_ROLE = 1;

const ROLE_RIGHTS = {
    
  [USER_ROLE.Admin] : [
    'getAllByAdminInAdminPlatform',
    'getByAdminInAdminPlatform',
    'aggregateByAdminInAdminPlatform',
    'getCountByAdminInAdminPlatform',
    'createByAdminInAdminPlatform',
    'addBulkByAdminInAdminPlatform',
    'updateByAdminInAdminPlatform',
    'updateBulkByAdminInAdminPlatform',
    'partialUpdateByAdminInAdminPlatform',
    'deleteByAdminInAdminPlatform',
    'softDeleteByAdminInAdminPlatform',
    'upsertByAdminInAdminPlatform',
    'fileUploadByAdminInAdminPlatform',
    'logoutByAdminInAdminPlatform',
    'softDeleteManyByAdminInAdminPlatform',
    'deleteManyByAdminInAdminPlatform',
    'changePasswordByAdminInAdminPlatform',
    'updateProfileByAdminInAdminPlatform'
  ],
    
  [USER_ROLE.User] : [
    'getAllByUserInDevicePlatform',
    'getByUserInDevicePlatform',
    'aggregateByUserInDevicePlatform',
    'getCountByUserInDevicePlatform',
    'createByUserInDevicePlatform',
    'addBulkByUserInDevicePlatform',
    'updateByUserInDevicePlatform',
    'updateBulkByUserInDevicePlatform',
    'partialUpdateByUserInDevicePlatform',
    'deleteByUserInDevicePlatform',
    'softDeleteByUserInDevicePlatform',
    'upsertByUserInDevicePlatform',
    'fileUploadByUserInDevicePlatform',
    'logoutByUserInDevicePlatform',
    'softDeleteManyByUserInDevicePlatform',
    'deleteManyByUserInDevicePlatform',
    'changePasswordByUserInDevicePlatform',
    'updateProfileByUserInDevicePlatform',
    'getAllByUserInClientPlatform',
    'getByUserInClientPlatform',
    'aggregateByUserInClientPlatform',
    'getCountByUserInClientPlatform',
    'createByUserInClientPlatform',
    'addBulkByUserInClientPlatform',
    'updateByUserInClientPlatform',
    'updateBulkByUserInClientPlatform',
    'partialUpdateByUserInClientPlatform',
    'deleteByUserInClientPlatform',
    'softDeleteByUserInClientPlatform',
    'upsertByUserInClientPlatform',
    'fileUploadByUserInClientPlatform',
    'logoutByUserInClientPlatform',
    'softDeleteManyByUserInClientPlatform',
    'deleteManyByUserInClientPlatform',
    'changePasswordByUserInClientPlatform',
    'updateProfileByUserInClientPlatform'
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
    
};