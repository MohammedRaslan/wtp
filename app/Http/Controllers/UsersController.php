<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use App\Admin;
use App\User;
use App\Category;
use App\Project;
use App\Tag;
use App\Subcategory;
use App\Membership;
use App\Users_Work;
use App\Program;
use App\Feedback;
use App\NavTitle;
use App\CategoryType;

use Intervention\Image\Facades\Image as Image;
use App\Notifications\followed;

class UsersController extends Controller 
{
    public function Users()
    {
        return view('admin.users.adminUsers');
    }
    
    public function userStatistics()
    {
        return view('admin.adminStatistics');
    }

    public function userSearch()
    {
        return view('admin.users.adminUserSearch');
    }

    public function searchedUser()
    {
        $projects = Project::all();
        return view('admin.users.searchedUser')->with('projects',$projects);
    }
    
    public function index()
    {
        // dd(NavTitle::with('Category')->get());
        return view('user.layout.general');
    }

    public function currentUser()
    {
        if(Auth::guard('user')->user()){
            $user = User::where('id',Auth::guard('user')->user()->id)->with('Membership')->with('Follower')->with('Like')->with('Following')->first();
            $user->wholeStorage = Membership::find($user->Membership->id)->wholeStorage();
            $notifications = $user->unreadNotifications()->select('data','created_at','type')->get();
            $user->notifications = collect();
            $user->chatNotifications = collect();
            foreach($notifications as $noti){
                $x = collect([['type' => $noti->type,'created_at' => $noti->created_at],$noti->data])->collapse();
                if($x['type'] == "App\\Notifications\\chatMessage"){
                    $user->chatNotifications->push($x);
                }else{
                    $user->notifications->push($x);
                }
            }
            // foreach($notifications as $noti){

            //     if($noti->type == "App\Notifications\projectLiked"){
            //         $user->notifications->push(['type'=>$noti->type,
            //         'project' => $noti->data['project'],
            //         'user' => $noti->data['user'],
            //         'id' => $noti->data['id']
            //         ]);   
            //     }elseif ($noti->type == "App\Notifications\projectLiked"){ 
            //         $user->notifications->push(['type'=>$noti->type,
            //         'user' => $noti->data['user'],
            //         'id' => $noti->data['id']]);   
            //     }
            // }
            return $user;
        }
       return response()->json(false);
    }

  

    public function logOut()
    {
        Auth::guard('user')->logout();
        return  response()->json(null);
    }

    public function logIn(Request $request)
    {   //$this->logOut();
        $this->validate($request,[
            'email' => ['required','email'], 
            'password'=>['required', 'string','min:8']
            ]);
        if(Auth::guard('user')->attempt(['email'=> $request['email'], 'password'=> $request['password']])) 
          {
            return response()->json(User::where('id',Auth::guard('user')->user()->id)->with('Follower')->with('Like')->with('Following')->first());
          }
        return  response()->json(false);
    }

    public function singUp(Request $r)
    {
        $this->validate($r, [
            'name' => ['required', 'string', 'max:255','unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        $img =  '/storage/users/user.png';
        $cover = '/storage/users/covers/cover.jpeg';
        $user = User::create([
            'name' => $r->name,
            'email'=> $r->email,
            'img' => $img,
            'cover' => $cover,
            'password' => Hash::make($r->password),
            'membership_type' => 1,
            'storage' => 0
        ]);
         Auth::guard('user')->login($user, true);
        return response()->json(User::where('id',Auth::guard('user')->user()->id)->with('Follower')->with('Following')->with('Like')->first());
    }

    public function home()
    {
        $result = [
            "categories" => Category::all(),
            "subCategrories" => Subcategory::all(),
            "programs" => Program::all(),
            "tags" => Tag::all()
        ];
        // foreach(Project::all() as $project){
        //     $porject->size = Storage::size(project->path.'/'.$project->file)
        // }
        return $result;
    }

    public function userDashboard()
    {
        if(Auth::guard('user')->user()){
            $followers =Auth::guard('user')->user()->Follower;
            $following = Auth::guard('user')->user()->Following;
            $projects = Project::where('user_id',Auth::guard('user')->user()->id)->latest()->with('Like')->with('Download')->with('Tag')->with('Category')->with('Subcategory')->with('Program')->get();
            return ['projects' =>$projects , 'followers' => $followers, 'following' => $following, 'user' => $this->currentUser()];
        }else{
            return response()->json(false);
        }
    }

    public function userData($username = null)
    {
        if($username){
            $user = User::where('name',$username)->with('Follower')->with('Following')->first();
            $projects = Project::where('user_id', $user->id)->latest()->take(6)->with('User')->withCount('Download')->withCount('Like')->withCount('View')->with('Tag')->with('Subcategory')->with('Category')->get();
            $result = [];
            foreach($projects->chunk(3) as $porjectChunk)
             {
                $chunk = ['projects' => $porjectChunk->toArray()];
                array_push($result,$chunk);
             }
            return ['user' => $user, 'projects' => $result];
        }
    }

    public function follow($id = null)
    {
        $response = false;
        if($id && Auth::guard('user')->user()){
            if($id != Auth::guard('user')->user()->id){
                $query = DB::table('followers')->where([['follow_id',Auth::guard('user')->user()->id],['user_id',$id]])->first();
                $user = User::find(Auth::guard('user')->user()->id);
                if($query){
                     $user->Following()->detach($id);
                 }else{
                    User::find(Auth::guard('user')->user()->id)->Following()->attach($id);
                    User::find($id)->notify(new followed($user));
                     $response = true;
                 }  
            }
       
        }
        return  response()->json($response);
    }

    public function formData()
    {
        if(Auth::guard('user')->user()){
            return ['programs'=> Program::all(), 'tags' => Tag::all(), 'categories' => Category::with('Subcategory')->get()];
        }
        return false;
    }

    public function updatePP(Request $request)
    {
        if($user = Auth::guard('user')->user()){
            if($request->type == "true"){
                if($request->hasFile('pp')){
                    if ($request->file('pp')->isValid()) {
                        $extension = $request->pp->extension();
                        $newImg =   $user->id . time() . '.' . $extension;
                        $oldImg = $user->img;
                        if($newImg = Storage::putFileAs('users',$request->file('pp'), $newImg)){
                            $user->img = Storage::url($newImg);
                            $user->save();
                            if($oldImg != "/storage/users/user.png"){
                                Storage::delete(substr($oldImg,9));
                            }
                            return $user->img;
                        }
                    }
                }
            }else{
                Storage::disk('local')->delete($user->img);
                $user->img = '/storage/users/user.png';
                $user->save();
                return $user->img;
            }
        }
        echo json_encode(false);
    }

    public function updateCover(Request $request)
    {
        if($user = Auth::guard('user')->user()){
            if($request->type == "true"){
                if($request->hasFile('cover')){
                    if ($request->file('cover')->isValid()) {
                        $extension = $request->cover->extension();
                        $newCover =   $user->id . time() . '.' . $extension;
                        $oldCover = $user->cover;
                        if($newCover = Storage::putFileAs('users/covers',$request->cover, $newCover)){
                            $user->cover = Storage::url($newCover);
                            if($oldCover != "/storage/users/cover.jpeg"){
                                Storage::disk('local')->delete(substr($oldCover,9));
                            }
                            $user->save();
                            return $user->cover;
                        }
                    }
                }
            }else{
                Storage::disk('local')->delete( $user->cover);
                $user->cover = '/storage/users/covers/cover.jpeg';
                $user->save();
                return $user->cover;
            }
        }
        echo json_encode(false);
    }

    public function  getpp($email=null)
    {
        if($email){
           $img = User::select('img')->where('email',$email)->orWhere('name',$email)->first();
           if($img){
               return $img;
           }else{
            return  response()->json( false);
           }
        }else{
            return  response()->json( false);
        }
    }

    public function sendFeedback(Request $request)
    {
        $x = $request->validate([
            'type' => 'required|string|max:10',
            'message' => 'string|max:255',
        ]);
        Feedback::create([
            'type' => $request->type,
            'message' => $request->message
        ]);
        return  response()->json(true);
    }
}
