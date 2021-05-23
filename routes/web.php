


<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/admin','AdminsController@index');
Route::get('adminlogin','AdminsController@adminlogin');
Route::post('adminlogininvoke','AdminsController@adminlogininvoke')->name('adminlogininvoke');
Route::get('users','UsersController@users');
Route::get('Projects','ProjectsController@projects');
Route::get('categories','CategoriesController@categories');
Route::get('statistics','AdminsController@stati');
Route::get('notification','AdminsController@noti');

Route::get('Reports','ReportsController@reports');
Route::get('listUserReprots','ReportsController@listUserReports');
Route::get('reportsManage','ReportsController@reportsManage');
Route::get('reportsStati','ReportsController@reportsStati');

Route::get('votes','VoteController@votes');
Route::get('listUserVotes','VoteController@listUserVotes');
Route::get('votesManage','VoteController@votesManage');
Route::get('votesStati','VoteController@votesStati');
Route::get('/UpdateVoting/{voting}','VoteController@UpdateVoting');
Route::get('/deleteAnswer/{id}','VoteController@deleteAnswer');


Route::post('addAdmin','AdminsController@addAdmin');
Route::get('userSearch','UsersController@userSearch');
Route::get('programs','ProgramsController@programs');
Route::get('tags','TagsController@tags');

Route::get('categoryType','CategoryTypeController@categoryType');
Route::get('categoryTypeManage','CategoryTypeController@categoryTypeManage');
Route::get('categoryTypeStati','CategoryTypeController@categoryTypeStati');
Route::get('editcategoryType/{id}/{title?}','CategoryTypeController@editcategoryType');
Route::get('deletecategoryType/{id}','CategoryTypeController@deletecategoryType');

Route::get('NavTitlesManage','CategoryTypeController@NavTitlesManage');
Route::post('addNavTitle','CategoryTypeController@addNavTitle');





Route::get('programManage','ProgramsController@programManage');
Route::get('tagsManage','TagsController@tagsManage');
Route::get('membership','MembershipsController@membership');
Route::get('membershipStati','MembershipsController@membershipStati');
Route::get('membershipInfo/{id}','MembershipsController@membershipInfo');
Route::get('manageMembership','MembershipsController@manageMembership');
Route::post('addMembership','MembershipsController@addMembership');
Route::get('editMembershipState/{id}/{newVal}','MembershipsController@editMembershipState');
Route::get('searchMembership/{token}','MembershipsController@searchMembership');
Route::get('addMembershipToProject','MembershipsController@addMembershipToProject');
Route::post('changeAdminPP','AdminsController@changeAdminPP');

Route::get('download','AdminsController@download');


Route::get('searchedUser','UsersController@searchedUser');
Route::get('userStatistics','UsersController@userStatistics');
Route::get('proStati','ProjectsController@proStati');
Route::get('proSearch','ProjectsController@proSearch');
Route::get('offers','OffersController@offers');
Route::get('manageAdmins','AdminsController@manageAdmins');

Route::get('deleteAdmin/{id}','AdminsController@deleteAdmin');
Route::get('activeProjects/{num}','ProjectsController@activeProjects');
Route::get('rejectedProjects/{num}','ProjectsController@rejectedProjects');
Route::get('pendingProjects/{num}','ProjectsController@pendingProjects');

Route::get('searchProjectsByCategory/{id}','ProjectsController@searchProjectsByCategory');
Route::get('searchProjectsByToken/{token}','ProjectsController@searchProjectsByToken');

Route::get('manageProjects','ProjectsController@manageProjects');
Route::get('subCategoryProjects/{id}','ProjectsController@subCategoryProjects');
Route::get('addProjectView','ProjectsController@addProjectView');
Route::post('addProject','ProjectsController@addProject');
Route::get('projectInfo/{id}','ProjectsController@projectInfo');
Route::get('projectOfferInfo/{id}','OffersController@projectOfferInfo');
Route::get('membershipOfferInfo/{id}','OffersController@membershipOfferInfo');
Route::post('addProgram','ProgramsController@addProgram');
Route::get('searchProject/{name}','ProjectsController@searchProject');


Route::post('addTag','TagsController@addTag');


Route::post('addcategoryType','CategoryTypeController@addcategoryType');




Route::get('editNavTitle/{id}/{title?}','CategoryTypeController@editNavTitle');
Route::get('deleteNavTitle/{id}/{title?}','CategoryTypeController@deleteNavTitle');



Route::get('editTag/{id}/{title?}','TagsController@editTag');
Route::get('deleteTag/{id}','TagsController@deleteTag');



Route::get('ctogryStatistics','CategoriesController@ctogryStatistics');
Route::get('programStatistics','ProgramsController@programStatistics');


Route::get('manageCtgories','CategoriesController@manageCtgories');
Route::post('addCategory','CategoriesController@addCategory');
Route::get('categoryInfo/{id}','CategoriesController@categoryInfo');

Route::get('/deleteProject/{id}','ProjectsController@deleteProject');

Route::get('deleteCategory/{id}','CategoriesController@deleteCategory');
Route::get('deleteTag/{id}','TagsController@deleteTag');
Route::get('deleteProgram/{id}','ProgramsController@deleteProgram');

Route::post('editCategory','CategoriesController@editCategory');
Route::post('editProgram','ProgramsController@editProgram');
Route::post('editTag','TagsController@editTag');

Route::get('approveProject/{id}','ProjectsController@approveProject');
Route::get('banProject/{id}','ProjectsController@banProject');
Route::get('rejectProject/{id}','ProjectsController@rejectProject');
Route::get('submitPrice/{id}/{price}','ProjectsController@submitPrice');
Route::get('addOfferToProject/{pid}/{oid}','ProjectsController@addOfferToProject');
Route::get('removeOfferToProject/{pid}','ProjectsController@removeOfferToProject');

Route::get('addMembershipToOffer/{pid}/{oid}','MembershipsController@addMembershipToOffer');
Route::get('removeMembershipFromOffer/{membershipid}','MembershipsController@removeMembershipFromOffer');


Route::get('projectsOffers','OffersController@projectsOffers');
Route::get('membershipOffers','OffersController@membershipOffers');
Route::post('addProjectOffer','OffersController@addProjectOffer');
Route::post('addMembershipOffer','OffersController@addMembershipOffer');
Route::get('deleteProjectOffer/{id}','OffersController@deleteProjectOffer');
Route::get('deleteMembershipOffer/{id}','OffersController@deleteMembershipOffer');


Route::get('HomeProjects','HomeController@HomeProjects');

Route::get('getUserpp/{email?}','UsersController@getpp');

Route::get('getSubCategories/{id}','CategoriesController@getSubCategories');
Route::get('editSubCategories/{id}/{title?}','SubcategoriesController@editSubCategories');
Route::get('deleteSubcategory/{id}','SubcategoriesController@deleteSubcategory');
Route::post('addSubcategory/{id}','SubcategoriesController@addSubcategory');



Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::get('home', 'AdminsController@home');

Route::get('emailMessages','SendMailController@emailMessages');
Route::post('addMessage','SendMailController@addMessage');
Route::get('messageInfo/{id}','SendMailController@messageInfo');
Route::get('send-mail','SendMailController@mailsend');

# From Here User Websit Will begin

Route::get('index','UsersController@index');
Route::get('userDashboard','UsersController@userDashboard');
Route::get('home','UsersController@home');
Route::get('fromData','UsersController@formData');
Route::put('/singUp','UsersController@singUp');
Route::get('/logOut','UsersController@logOut');
Route::get('follow/{id?}','UsersController@follow');
Route::post('/logIn','UsersController@logIn');
Route::get('/userData/{username?}','UsersController@userData');
Route::get('getProjects/{number?}','ProjectsController@getProjects');
Route::get('/exploreProjects/{length?}','ProjectsController@explore');
Route::get('/followingProjects/{length?}','ProjectsController@followingProjects');
Route::get('likeProject/{id}','ProjectsController@likeProject');
Route::get('/currentUser','UsersController@currentUser');
Route::get('/search/{query?}/{length?}','ProjectsController@searchProjects');
Route::get('/directSearch/{token?}','ProjectsController@directSearch');

Route::post('/userProject','ProjectsController@addProject');


Route::get('/UpdateReportsOptions/{options?}','ReportsController@UpdateReportsOptions');
Route::get('/getReportsOptions','ReportsController@getReportsOptions');
Route::post('/submitReport','ReportsController@submitReport');
Route::post('/editUserProject','ProjectsController@EditProject');
Route::post('/updateProfileImage','UsersController@updatePP');
Route::post('/updateCoverImage','UsersController@updateCover');
Route::get('getProject/{id}','ProjectsController@getProject');
Route::get('/approveDownload','ProjectsController@approveDownload');
Route::get('/getDownload/{id}/{title}','ProjectsController@downloadProject');
Route::post('/feedback','UsersController@sendFeedback');
Route::get('/getRelatedProjects/{id?}/{length?}','ProjectsController@getRelatedProjects');


Route::post('/sendMessage','ChatMessageController@sendChatMessage');
Route::get('/fetch/{id?}','ChatMessageController@getChatMessages');
Route::post('/getOthers','UsersController@getOthers');



Route::get('{path}/{id?}/{title?}', 'UsersController@index')->where('path','([A-z]+)?');
Route::get('{path}', 'UsersController@index')->where('path','([A-z]+)?');



