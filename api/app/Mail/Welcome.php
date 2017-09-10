<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Welcome extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $email;
    public $name;
    public $token;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $name, $token)
    {
        $this->email = $email;
        $this->name = $name;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to($this->email)
            ->view('emails.welcome')
            ->subject('欢迎加入riuir')
            ->with([
                'name' => $this->name,
                'token' => $this->token
            ]);
    }
}
