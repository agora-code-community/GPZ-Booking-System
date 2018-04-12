<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rooms = App\Room::all();

        factory(App\Event::class, 5)
            ->create()
            ->each(function ($event) {
                $event->bookings()
                    ->save(factory(App\Booking::class)
                        ->make());
            });

        // Populate the pivot table
        App\Booking::all()->each(function ($booking) use ($rooms) {
            $booking->rooms()->attach(
                $rooms->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
