<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    protected $fillable = [
        'message', 'sourceID','destinationID','destinationState',
    ];

    public function SourceUser()
    {
        return $this->belongsTo('App\User','sourceID');
    }

    public function DestinationUser()
    {
        return $this->belongsTo('App\User','destinationID');
    }
}
