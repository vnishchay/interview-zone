// /**
//  * deleteDependent.js
//  * @description :: exports deleteDependent service for project.
//  */

// let User = require('../model/user');
// let Product = require('../model/product');
// let Category = require('../model/category');
// let Order = require('../model/order');
// let Banner = require('../model/banner');
// let Cart = require('../model/cart');
// let Country = require('../model/country');
// let City = require('../model/city');
// let Pincode = require('../model/pincode');
// let State = require('../model/state');
// let Wallet = require('../model/wallet');
// let WalletTransaction = require('../model/walletTransaction');
// let Shipping = require('../model/shipping');
// let UserTokens = require('../model/userTokens');
// let Role = require('../model/role');
// let ProjectRoute = require('../model/projectRoute');
// let RouteRole = require('../model/routeRole');
// let UserRole = require('../model/userRole');
// let dbService = require('.//dbService');

// const deleteUser = async (filter) => {
//   try {
//     let user = await User.find(filter, { _id: 1 });
//     if (user.length) {
//       user = user.map((obj) => obj._id);
//       const userFilter8863 = { 'addedBy': { '$in': user } };
//       const user2317 = await deleteUser(userFilter8863);
//       const userFilter4958 = { 'updatedBy': { '$in': user } };
//       const user7885 = await deleteUser(userFilter4958);
//       const productFilter2894 = { 'sellerId': { '$in': user } };
//       const product8956 = await deleteProduct(productFilter2894);
//       const productFilter5885 = { 'addedBy': { '$in': user } };
//       const product8069 = await deleteProduct(productFilter5885);
//       const productFilter7829 = { 'updatedBy': { '$in': user } };
//       const product3753 = await deleteProduct(productFilter7829);
//       const categoryFilter3382 = { 'addedBy': { '$in': user } };
//       const category9557 = await deleteCategory(categoryFilter3382);
//       const categoryFilter1774 = { 'updatedBy': { '$in': user } };
//       const category2661 = await deleteCategory(categoryFilter1774);
//       const orderFilter6000 = { 'addedBy': { '$in': user } };
//       const order9394 = await deleteOrder(orderFilter6000);
//       const orderFilter9389 = { 'updatedBy': { '$in': user } };
//       const order2456 = await deleteOrder(orderFilter9389);
//       const bannerFilter7541 = { 'addedBy': { '$in': user } };
//       const banner2636 = await deleteBanner(bannerFilter7541);
//       const bannerFilter2725 = { 'updatedBy': { '$in': user } };
//       const banner9515 = await deleteBanner(bannerFilter2725);
//       const bannerFilter7858 = { 'sellerId': { '$in': user } };
//       const banner1966 = await deleteBanner(bannerFilter7858);
//       const cartFilter2134 = { 'addedBy': { '$in': user } };
//       const cart1663 = await deleteCart(cartFilter2134);
//       const cartFilter6922 = { 'updatedBy': { '$in': user } };
//       const cart1934 = await deleteCart(cartFilter6922);
//       const countryFilter1769 = { 'addedBy': { '$in': user } };
//       const country3690 = await deleteCountry(countryFilter1769);
//       const countryFilter3527 = { 'updatedBy': { '$in': user } };
//       const country4521 = await deleteCountry(countryFilter3527);
//       const cityFilter1618 = { 'addedBy': { '$in': user } };
//       const city9303 = await deleteCity(cityFilter1618);
//       const cityFilter9366 = { 'updatedBy': { '$in': user } };
//       const city3567 = await deleteCity(cityFilter9366);
//       const pincodeFilter6070 = { 'addedBy': { '$in': user } };
//       const pincode4471 = await deletePincode(pincodeFilter6070);
//       const pincodeFilter9341 = { 'updatedBy': { '$in': user } };
//       const pincode8954 = await deletePincode(pincodeFilter9341);
//       const stateFilter3796 = { 'addedBy': { '$in': user } };
//       const state3830 = await deleteState(stateFilter3796);
//       const stateFilter5666 = { 'updatedBy': { '$in': user } };
//       const state2694 = await deleteState(stateFilter5666);
//       const walletFilter2367 = { 'userId': { '$in': user } };
//       const wallet2158 = await deleteWallet(walletFilter2367);
//       const walletFilter7034 = { 'addedBy': { '$in': user } };
//       const wallet1376 = await deleteWallet(walletFilter7034);
//       const walletFilter5169 = { 'updatedBy': { '$in': user } };
//       const wallet1930 = await deleteWallet(walletFilter5169);
//       const walletTransactionFilter8073 = { 'userId': { '$in': user } };
//       const walletTransaction5418 = await deleteWalletTransaction(walletTransactionFilter8073);
//       const walletTransactionFilter7937 = { 'addedBy': { '$in': user } };
//       const walletTransaction6071 = await deleteWalletTransaction(walletTransactionFilter7937);
//       const walletTransactionFilter5874 = { 'updatedBy': { '$in': user } };
//       const walletTransaction4921 = await deleteWalletTransaction(walletTransactionFilter5874);
//       const shippingFilter8615 = { 'addedBy': { '$in': user } };
//       const shipping4789 = await deleteShipping(shippingFilter8615);
//       const shippingFilter3404 = { 'updatedBy': { '$in': user } };
//       const shipping3999 = await deleteShipping(shippingFilter3404);
//       const userTokensFilter8586 = { 'userId': { '$in': user } };
//       const userTokens8967 = await deleteUserTokens(userTokensFilter8586);
//       const userRoleFilter8122 = { 'userId': { '$in': user } };
//       const userRole9064 = await deleteUserRole(userRoleFilter8122);
//       return await User.deleteMany(filter);
//     } else {
//       return 'No user found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteProduct = async (filter) => {
//   try {
//     return await Product.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteCategory = async (filter) => {
//   try {
//     let category = await Category.find(filter, { _id: 1 });
//     if (category.length) {
//       category = category.map((obj) => obj._id);
//       const productFilter2092 = { 'category': { '$in': category } };
//       const product6393 = await deleteProduct(productFilter2092);
//       const productFilter1840 = { 'subCategory': { '$in': category } };
//       const product9755 = await deleteProduct(productFilter1840);
//       const categoryFilter4903 = { 'parentCategoryId': { '$in': category } };
//       const category2844 = await deleteCategory(categoryFilter4903);
//       return await Category.deleteMany(filter);
//     } else {
//       return 'No category found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteOrder = async (filter) => {
//   try {
//     return await Order.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteBanner = async (filter) => {
//   try {
//     return await Banner.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteCart = async (filter) => {
//   try {
//     return await Cart.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteCountry = async (filter) => {
//   try {
//     let country = await Country.find(filter, { _id: 1 });
//     if (country.length) {
//       country = country.map((obj) => obj._id);
//       const pincodeFilter3226 = { 'countryId': { '$in': country } };
//       const pincode6456 = await deletePincode(pincodeFilter3226);
//       const stateFilter3115 = { 'countryId': { '$in': country } };
//       const state3294 = await deleteState(stateFilter3115);
//       return await Country.deleteMany(filter);
//     } else {
//       return 'No country found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteCity = async (filter) => {
//   try {
//     let city = await City.find(filter, { _id: 1 });
//     if (city.length) {
//       city = city.map((obj) => obj._id);
//       const pincodeFilter6998 = { 'cityId': { '$in': city } };
//       const pincode0952 = await deletePincode(pincodeFilter6998);
//       return await City.deleteMany(filter);
//     } else {
//       return 'No city found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deletePincode = async (filter) => {
//   try {
//     return await Pincode.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteState = async (filter) => {
//   try {
//     let state = await State.find(filter, { _id: 1 });
//     if (state.length) {
//       state = state.map((obj) => obj._id);
//       const cityFilter8079 = { 'stateId': { '$in': state } };
//       const city8087 = await deleteCity(cityFilter8079);
//       const pincodeFilter7230 = { 'stateId': { '$in': state } };
//       const pincode8797 = await deletePincode(pincodeFilter7230);
//       return await State.deleteMany(filter);
//     } else {
//       return 'No state found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteWallet = async (filter) => {
//   try {
//     let wallet = await Wallet.find(filter, { _id: 1 });
//     if (wallet.length) {
//       wallet = wallet.map((obj) => obj._id);
//       const walletTransactionFilter3749 = { 'walletId': { '$in': wallet } };
//       const walletTransaction8679 = await deleteWalletTransaction(walletTransactionFilter3749);
//       return await Wallet.deleteMany(filter);
//     } else {
//       return 'No wallet found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteWalletTransaction = async (filter) => {
//   try {
//     return await WalletTransaction.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteShipping = async (filter) => {
//   try {
//     return await Shipping.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteUserTokens = async (filter) => {
//   try {
//     return await UserTokens.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteRole = async (filter) => {
//   try {
//     let role = await Role.find(filter, { _id: 1 });
//     if (role.length) {
//       role = role.map((obj) => obj._id);
//       const routeRoleFilter7358 = { 'roleId': { '$in': role } };
//       const routeRole9797 = await deleteRouteRole(routeRoleFilter7358);
//       const userRoleFilter5532 = { 'roleId': { '$in': role } };
//       const userRole4505 = await deleteUserRole(userRoleFilter5532);
//       return await Role.deleteMany(filter);
//     } else {
//       return 'No role found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteProjectRoute = async (filter) => {
//   try {
//     let projectroute = await ProjectRoute.find(filter, { _id: 1 });
//     if (projectroute.length) {
//       projectroute = projectroute.map((obj) => obj._id);
//       const routeRoleFilter8985 = { 'routeId': { '$in': projectroute } };
//       const routeRole8241 = await deleteRouteRole(routeRoleFilter8985);
//       return await ProjectRoute.deleteMany(filter);
//     } else {
//       return 'No projectRoute found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteRouteRole = async (filter) => {
//   try {
//     return await RouteRole.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteUserRole = async (filter) => {
//   try {
//     return await UserRole.deleteMany(filter);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countUser = async (filter) => {
//   try {

//     let user = await User.find(filter, { _id: 1 });
//     if (user.length) {
//       user = user.map((obj) => obj._id);

//       const userFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const userCnt = await dbService.countDocument(User, userFilter);

//       const productFilter = { '$or': [{ sellerId: { '$in': user } }, { addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const productCnt = await dbService.countDocument(Product, productFilter);

//       const categoryFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const categoryCnt = await dbService.countDocument(Category, categoryFilter);

//       const orderFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const orderCnt = await dbService.countDocument(Order, orderFilter);

//       const bannerFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }, { sellerId: { '$in': user } }] };
//       const bannerCnt = await dbService.countDocument(Banner, bannerFilter);

//       const cartFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const cartCnt = await dbService.countDocument(Cart, cartFilter);

//       const countryFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const countryCnt = await dbService.countDocument(Country, countryFilter);

//       const cityFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const cityCnt = await dbService.countDocument(City, cityFilter);

//       const pincodeFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const pincodeCnt = await dbService.countDocument(Pincode, pincodeFilter);

//       const stateFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const stateCnt = await dbService.countDocument(State, stateFilter);

//       const walletFilter = { '$or': [{ userId: { '$in': user } }, { addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const walletCnt = await dbService.countDocument(Wallet, walletFilter);

//       const walletTransactionFilter = { '$or': [{ userId: { '$in': user } }, { addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const walletTransactionCnt = await dbService.countDocument(WalletTransaction, walletTransactionFilter);

//       const shippingFilter = { '$or': [{ addedBy: { '$in': user } }, { updatedBy: { '$in': user } }] };
//       const shippingCnt = await dbService.countDocument(Shipping, shippingFilter);

//       const userTokensFilter = { '$or': [{ userId: { '$in': user } }] };
//       const userTokensCnt = await dbService.countDocument(UserTokens, userTokensFilter);

//       const userRoleFilter = { '$or': [{ userId: { '$in': user } }] };
//       const userRoleCnt = await dbService.countDocument(UserRole, userRoleFilter);

//       let response = {
//         user: userCnt,
//         product: productCnt,
//         category: categoryCnt,
//         order: orderCnt,
//         banner: bannerCnt,
//         cart: cartCnt,
//         country: countryCnt,
//         city: cityCnt,
//         pincode: pincodeCnt,
//         state: stateCnt,
//         wallet: walletCnt,
//         walletTransaction: walletTransactionCnt,
//         shipping: shippingCnt,
//         userTokens: userTokensCnt,
//         userRole: userRoleCnt,
//       };
//       return response;
//     } else {
//       return { user: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countProduct = async (filter) => {
//   try {

//     const productCnt = await Product.countDocuments(filter);
//     return { product: productCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countCategory = async (filter) => {
//   try {

//     let category = await Category.find(filter, { _id: 1 });
//     if (category.length) {
//       category = category.map((obj) => obj._id);

//       const productFilter = { '$or': [{ category: { '$in': category } }, { subCategory: { '$in': category } }] };
//       const productCnt = await dbService.countDocument(Product, productFilter);

//       const categoryFilter = { '$or': [{ parentCategoryId: { '$in': category } }] };
//       const categoryCnt = await dbService.countDocument(Category, categoryFilter);

//       let response = {
//         product: productCnt,
//         category: categoryCnt,
//       };
//       return response;
//     } else {
//       return { category: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countOrder = async (filter) => {
//   try {

//     const orderCnt = await Order.countDocuments(filter);
//     return { order: orderCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countBanner = async (filter) => {
//   try {

//     const bannerCnt = await Banner.countDocuments(filter);
//     return { banner: bannerCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countCart = async (filter) => {
//   try {

//     const cartCnt = await Cart.countDocuments(filter);
//     return { cart: cartCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countCountry = async (filter) => {
//   try {

//     let country = await Country.find(filter, { _id: 1 });
//     if (country.length) {
//       country = country.map((obj) => obj._id);

//       const pincodeFilter = { '$or': [{ countryId: { '$in': country } }] };
//       const pincodeCnt = await dbService.countDocument(Pincode, pincodeFilter);

//       const stateFilter = { '$or': [{ countryId: { '$in': country } }] };
//       const stateCnt = await dbService.countDocument(State, stateFilter);

//       let response = {
//         pincode: pincodeCnt,
//         state: stateCnt,
//       };
//       return response;
//     } else {
//       return { country: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countCity = async (filter) => {
//   try {

//     let city = await City.find(filter, { _id: 1 });
//     if (city.length) {
//       city = city.map((obj) => obj._id);

//       const pincodeFilter = { '$or': [{ cityId: { '$in': city } }] };
//       const pincodeCnt = await dbService.countDocument(Pincode, pincodeFilter);

//       let response = { pincode: pincodeCnt, };
//       return response;
//     } else {
//       return { city: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countPincode = async (filter) => {
//   try {

//     const pincodeCnt = await Pincode.countDocuments(filter);
//     return { pincode: pincodeCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countState = async (filter) => {
//   try {

//     let state = await State.find(filter, { _id: 1 });
//     if (state.length) {
//       state = state.map((obj) => obj._id);

//       const cityFilter = { '$or': [{ stateId: { '$in': state } }] };
//       const cityCnt = await dbService.countDocument(City, cityFilter);

//       const pincodeFilter = { '$or': [{ stateId: { '$in': state } }] };
//       const pincodeCnt = await dbService.countDocument(Pincode, pincodeFilter);

//       let response = {
//         city: cityCnt,
//         pincode: pincodeCnt,
//       };
//       return response;
//     } else {
//       return { state: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countWallet = async (filter) => {
//   try {

//     let wallet = await Wallet.find(filter, { _id: 1 });
//     if (wallet.length) {
//       wallet = wallet.map((obj) => obj._id);

//       const walletTransactionFilter = { '$or': [{ walletId: { '$in': wallet } }] };
//       const walletTransactionCnt = await dbService.countDocument(WalletTransaction, walletTransactionFilter);

//       let response = { walletTransaction: walletTransactionCnt, };
//       return response;
//     } else {
//       return { wallet: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countWalletTransaction = async (filter) => {
//   try {

//     const walletTransactionCnt = await WalletTransaction.countDocuments(filter);
//     return { walletTransaction: walletTransactionCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countShipping = async (filter) => {
//   try {

//     const shippingCnt = await Shipping.countDocuments(filter);
//     return { shipping: shippingCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countUserTokens = async (filter) => {
//   try {

//     const userTokensCnt = await UserTokens.countDocuments(filter);
//     return { userTokens: userTokensCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countRole = async (filter) => {
//   try {

//     let role = await Role.find(filter, { _id: 1 });
//     if (role.length) {
//       role = role.map((obj) => obj._id);

//       const routeRoleFilter = { '$or': [{ roleId: { '$in': role } }] };
//       const routeRoleCnt = await dbService.countDocument(RouteRole, routeRoleFilter);

//       const userRoleFilter = { '$or': [{ roleId: { '$in': role } }] };
//       const userRoleCnt = await dbService.countDocument(UserRole, userRoleFilter);

//       let response = {
//         routeRole: routeRoleCnt,
//         userRole: userRoleCnt,
//       };
//       return response;
//     } else {
//       return { role: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countProjectRoute = async (filter) => {
//   try {

//     let projectroute = await ProjectRoute.find(filter, { _id: 1 });
//     if (projectroute.length) {
//       projectroute = projectroute.map((obj) => obj._id);

//       const routeRoleFilter = { '$or': [{ routeId: { '$in': projectroute } }] };
//       const routeRoleCnt = await dbService.countDocument(RouteRole, routeRoleFilter);

//       let response = { routeRole: routeRoleCnt, };
//       return response;
//     } else {
//       return { projectroute: 0 };
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countRouteRole = async (filter) => {
//   try {

//     const routeRoleCnt = await RouteRole.countDocuments(filter);
//     return { routeRole: routeRoleCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const countUserRole = async (filter) => {
//   try {

//     const userRoleCnt = await UserRole.countDocuments(filter);
//     return { userRole: userRoleCnt };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteUser = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let user = await User.find(filter, { _id: 1 });
//     if (user.length) {
//       user = user.map((obj) => obj._id);
//       const userFilter9739 = { 'addedBy': { '$in': user } };
//       const user4457 = await softDeleteUser(userFilter9739, updateBody);
//       const userFilter0284 = { 'updatedBy': { '$in': user } };
//       const user7886 = await softDeleteUser(userFilter0284, updateBody);
//       const productFilter3406 = { 'sellerId': { '$in': user } };
//       const product9858 = await softDeleteProduct(productFilter3406, updateBody);
//       const productFilter3761 = { 'addedBy': { '$in': user } };
//       const product2984 = await softDeleteProduct(productFilter3761, updateBody);
//       const productFilter0982 = { 'updatedBy': { '$in': user } };
//       const product0176 = await softDeleteProduct(productFilter0982, updateBody);
//       const categoryFilter4471 = { 'addedBy': { '$in': user } };
//       const category6863 = await softDeleteCategory(categoryFilter4471, updateBody);
//       const categoryFilter2972 = { 'updatedBy': { '$in': user } };
//       const category6602 = await softDeleteCategory(categoryFilter2972, updateBody);
//       const orderFilter1625 = { 'addedBy': { '$in': user } };
//       const order6697 = await softDeleteOrder(orderFilter1625, updateBody);
//       const orderFilter4588 = { 'updatedBy': { '$in': user } };
//       const order0453 = await softDeleteOrder(orderFilter4588, updateBody);
//       const bannerFilter0862 = { 'addedBy': { '$in': user } };
//       const banner4925 = await softDeleteBanner(bannerFilter0862, updateBody);
//       const bannerFilter7576 = { 'updatedBy': { '$in': user } };
//       const banner5662 = await softDeleteBanner(bannerFilter7576, updateBody);
//       const bannerFilter9172 = { 'sellerId': { '$in': user } };
//       const banner1804 = await softDeleteBanner(bannerFilter9172, updateBody);
//       const cartFilter0994 = { 'addedBy': { '$in': user } };
//       const cart7841 = await softDeleteCart(cartFilter0994, updateBody);
//       const cartFilter3257 = { 'updatedBy': { '$in': user } };
//       const cart9336 = await softDeleteCart(cartFilter3257, updateBody);
//       const countryFilter5857 = { 'addedBy': { '$in': user } };
//       const country3349 = await softDeleteCountry(countryFilter5857, updateBody);
//       const countryFilter9809 = { 'updatedBy': { '$in': user } };
//       const country2738 = await softDeleteCountry(countryFilter9809, updateBody);
//       const cityFilter4631 = { 'addedBy': { '$in': user } };
//       const city2170 = await softDeleteCity(cityFilter4631, updateBody);
//       const cityFilter2639 = { 'updatedBy': { '$in': user } };
//       const city4782 = await softDeleteCity(cityFilter2639, updateBody);
//       const pincodeFilter7284 = { 'addedBy': { '$in': user } };
//       const pincode1683 = await softDeletePincode(pincodeFilter7284, updateBody);
//       const pincodeFilter0969 = { 'updatedBy': { '$in': user } };
//       const pincode4819 = await softDeletePincode(pincodeFilter0969, updateBody);
//       const stateFilter7038 = { 'addedBy': { '$in': user } };
//       const state8283 = await softDeleteState(stateFilter7038, updateBody);
//       const stateFilter3398 = { 'updatedBy': { '$in': user } };
//       const state8421 = await softDeleteState(stateFilter3398, updateBody);
//       const walletFilter4881 = { 'userId': { '$in': user } };
//       const wallet0560 = await softDeleteWallet(walletFilter4881, updateBody);
//       const walletFilter1136 = { 'addedBy': { '$in': user } };
//       const wallet1727 = await softDeleteWallet(walletFilter1136, updateBody);
//       const walletFilter2821 = { 'updatedBy': { '$in': user } };
//       const wallet4271 = await softDeleteWallet(walletFilter2821, updateBody);
//       const walletTransactionFilter5538 = { 'userId': { '$in': user } };
//       const walletTransaction9740 = await softDeleteWalletTransaction(walletTransactionFilter5538, updateBody);
//       const walletTransactionFilter2773 = { 'addedBy': { '$in': user } };
//       const walletTransaction9438 = await softDeleteWalletTransaction(walletTransactionFilter2773, updateBody);
//       const walletTransactionFilter6881 = { 'updatedBy': { '$in': user } };
//       const walletTransaction7044 = await softDeleteWalletTransaction(walletTransactionFilter6881, updateBody);
//       const shippingFilter2328 = { 'addedBy': { '$in': user } };
//       const shipping2413 = await softDeleteShipping(shippingFilter2328, updateBody);
//       const shippingFilter6944 = { 'updatedBy': { '$in': user } };
//       const shipping3094 = await softDeleteShipping(shippingFilter6944, updateBody);
//       const userTokensFilter8883 = { 'userId': { '$in': user } };
//       const userTokens9397 = await softDeleteUserTokens(userTokensFilter8883, updateBody);
//       const userRoleFilter3536 = { 'userId': { '$in': user } };
//       const userRole3922 = await softDeleteUserRole(userRoleFilter3536, updateBody);
//       return await User.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No user found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteProduct = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await Product.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteCategory = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let category = await Category.find(filter, { _id: 1 });
//     if (category.length) {
//       category = category.map((obj) => obj._id);
//       const productFilter3205 = { 'category': { '$in': category } };
//       const product0774 = await softDeleteProduct(productFilter3205, updateBody);
//       const productFilter4041 = { 'subCategory': { '$in': category } };
//       const product5960 = await softDeleteProduct(productFilter4041, updateBody);
//       const categoryFilter6587 = { 'parentCategoryId': { '$in': category } };
//       const category4889 = await softDeleteCategory(categoryFilter6587, updateBody);
//       return await Category.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No category found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteOrder = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await Order.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteBanner = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await Banner.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteCart = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await Cart.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteCountry = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let country = await Country.find(filter, { _id: 1 });
//     if (country.length) {
//       country = country.map((obj) => obj._id);
//       const pincodeFilter9457 = { 'countryId': { '$in': country } };
//       const pincode7705 = await softDeletePincode(pincodeFilter9457, updateBody);
//       const stateFilter8165 = { 'countryId': { '$in': country } };
//       const state6749 = await softDeleteState(stateFilter8165, updateBody);
//       return await Country.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No country found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteCity = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let city = await City.find(filter, { _id: 1 });
//     if (city.length) {
//       city = city.map((obj) => obj._id);
//       const pincodeFilter6974 = { 'cityId': { '$in': city } };
//       const pincode9306 = await softDeletePincode(pincodeFilter6974, updateBody);
//       return await City.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No city found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeletePincode = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await Pincode.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteState = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let state = await State.find(filter, { _id: 1 });
//     if (state.length) {
//       state = state.map((obj) => obj._id);
//       const cityFilter5426 = { 'stateId': { '$in': state } };
//       const city3015 = await softDeleteCity(cityFilter5426, updateBody);
//       const pincodeFilter0949 = { 'stateId': { '$in': state } };
//       const pincode6467 = await softDeletePincode(pincodeFilter0949, updateBody);
//       return await State.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No state found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteWallet = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let wallet = await Wallet.find(filter, { _id: 1 });
//     if (wallet.length) {
//       wallet = wallet.map((obj) => obj._id);
//       const walletTransactionFilter7903 = { 'walletId': { '$in': wallet } };
//       const walletTransaction8068 = await softDeleteWalletTransaction(walletTransactionFilter7903, updateBody);
//       return await Wallet.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No wallet found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteWalletTransaction = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await WalletTransaction.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteShipping = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await Shipping.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteUserTokens = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await UserTokens.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteRole = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let role = await Role.find(filter, { _id: 1 });
//     if (role.length) {
//       role = role.map((obj) => obj._id);
//       const routeRoleFilter1810 = { 'roleId': { '$in': role } };
//       const routeRole6568 = await softDeleteRouteRole(routeRoleFilter1810, updateBody);
//       const userRoleFilter8545 = { 'roleId': { '$in': role } };
//       const userRole8747 = await softDeleteUserRole(userRoleFilter8545, updateBody);
//       return await Role.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No role found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteProjectRoute = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     let projectroute = await ProjectRoute.find(filter, { _id: 1 });
//     if (projectroute.length) {
//       projectroute = projectroute.map((obj) => obj._id);
//       const routeRoleFilter5208 = { 'routeId': { '$in': projectroute } };
//       const routeRole5084 = await softDeleteRouteRole(routeRoleFilter5208, updateBody);
//       return await ProjectRoute.updateMany(filter, {
//         ...defaultValues,
//         ...updateBody
//       });
//     } else {
//       return 'No projectRoute found.';
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteRouteRole = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await RouteRole.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const softDeleteUserRole = async (filter, updateBody, defaultValues = {}) => {
//   try {
//     return await UserRole.updateMany(filter, {
//       ...defaultValues,
//       ...updateBody
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// module.exports = {
//   deleteUser,
//   deleteProduct,
//   deleteCategory,
//   deleteOrder,
//   deleteBanner,
//   deleteCart,
//   deleteCountry,
//   deleteCity,
//   deletePincode,
//   deleteState,
//   deleteWallet,
//   deleteWalletTransaction,
//   deleteShipping,
//   deleteUserTokens,
//   deleteRole,
//   deleteProjectRoute,
//   deleteRouteRole,
//   deleteUserRole,
//   countUser,
//   countProduct,
//   countCategory,
//   countOrder,
//   countBanner,
//   countCart,
//   countCountry,
//   countCity,
//   countPincode,
//   countState,
//   countWallet,
//   countWalletTransaction,
//   countShipping,
//   countUserTokens,
//   countRole,
//   countProjectRoute,
//   countRouteRole,
//   countUserRole,
//   softDeleteUser,
//   softDeleteProduct,
//   softDeleteCategory,
//   softDeleteOrder,
//   softDeleteBanner,
//   softDeleteCart,
//   softDeleteCountry,
//   softDeleteCity,
//   softDeletePincode,
//   softDeleteState,
//   softDeleteWallet,
//   softDeleteWalletTransaction,
//   softDeleteShipping,
//   softDeleteUserTokens,
//   softDeleteRole,
//   softDeleteProjectRoute,
//   softDeleteRouteRole,
//   softDeleteUserRole,
// };
