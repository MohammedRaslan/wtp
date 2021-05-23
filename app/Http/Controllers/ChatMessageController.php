<?php

namespace App\Http\Controllers;
use App\ChatMessage;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Notifications\chatMessage as chatMessageNotification;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ChatMessageController extends Controller
{
    public function sendChatMessage(Request $request)
    {
        if(!($request->sourceID == $request->destinationID)){
            $currentUser = Auth::guard('user')->user();
            
            if($request->sourceID == $currentUser->id){
                $message = new ChatMessage();
                $message->message = $request->message;
                $message->sourceID = $currentUser->id;
                $message->destinationID = $request->destinationID;

                if($message->save()){
                    $user = User::find($request->destinationID);
                    $other = null;
                   if(!$user->following->pluck('id')->contains($message->sourceID)){
                        $other =  User::find($request->sourceID);
                   }
                    User::find($request->destinationID)->notify(new chatMessageNotification($message,$other));
                    return $message;
                }
            }
        }
        return json_encode(false);
    }

    public function getChatMessages($id = null)
    {
        $currentUser = Auth::guard('user')->user();
        $ids = [];
        if($currentUser && (int)$id){
           $notifications = Auth::guard('user')->user()->notifications
           ->where('type','App\Notifications\chatMessage');
           foreach($notifications as $noti){ 
               $noti->toArray();
               if(($noti['data']['message']['sourceID'] == $id || $noti['data']['message']['destinationID'] == $id)){
                   array_push($ids , $noti['data']['id']);
               }
           }
           Auth::guard('user')->user()->notifications()->whereIn('id',$ids)->delete();
           
           return ChatMessage::where([['destinationID',$currentUser->id],['sourceID',$id]])
                        ->orWhere([['destinationID',$id],['sourceID',$currentUser->id]])
                        ->get();
        }
        return json_encode(false);
    }
}
