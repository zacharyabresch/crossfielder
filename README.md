# crossfielder

Are you a _total_ nerd about pens and paper? Have you been trying to obtain a Crossfield Notebook but keep missing when it is available? ***This*** is the CLI app for you!!

This application sprang to life out of ... "necessity". I *really* wanted on of these notebooks but kept missing when they were in stock. I've also wanted to expand my Node knowledge into building command line interfaces. Hence, `crossfielder` was born!

## Installation

* `npm i -g crossfielder` - ***Warning***: This has not yet been published to `npm`. In the meantime you can do:
    - `npm i -g git+ssh://git@github.com:zacharyabresch/crossfielder.git`

## Usage

`crossfielder <options>`

## Options:

* `-n, --notifier` - the type of notification you want to receive. Available options are
    - `email`
    - `system`
    - `both`
* `-to` - The email address to send notifications _to_
* `-from` - The email address to send notifications from
* `--smtp-user` - The SMTP user's email address (**must be a valid Gmail email address**)