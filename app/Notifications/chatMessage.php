<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\User;
use App\ChatMessage as message;


class chatMessage extends Notification implements ShouldQueue
{
    use Queueable;
    public $message;
    public $other;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(message $message, $other =null)
    {
        $this->message = $message;
        $this->other = $other;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database','broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        if($this->other){
            return [
                'id' => $this->id,
                'read_at' => null,
                'message' =>  $this->message,
                'other' => ['name' => $this->other->name,'id' => $this->other->id,'img'=>$this->other->img],
            ];
        }
        return [
            'id' => $this->id,
            'read_at' => null,
            'message' =>  $this->message,
        ];
        
    }
}
