<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Booking::class, function (Faker $faker) {

    return [
        'start_time' => $faker->time(),
        'end_time' => $faker->time(),
        'start_date' => $faker->date(),
        'end_date' => $faker->date(),
        'event_id' => function () {
            return factory(App\Event::class)->create()->id;
        }
    ];
});