<?php

use Illuminate\Database\Seeder;

class BookingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rooms = App\Room::all();

        factory(App\Booking::class, 5)
            ->create();

        // Populate the pivot table
        App\Booking::all()->each(function ($booking) use ($rooms) {
            $booking->rooms()->attach(
                $rooms->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
