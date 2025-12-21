import { useState } from 'react';

function Reservation(){
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    return(
        <div>
            <h1>Reservation Page</h1>
            <form style={{display: 'grid', gap: '20px', maxWidth: 200, margin: 'auto'}}>
                   <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    <label for="res-time">Choose time</label>
                    <input type="time" id="res-time" value={time} onChange={(e) => setTime(e.target.value)}/>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                    <label for="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>casual meeting</option>
                        <option>Other</option>
                    </select>
                    <input type="submit" value="Make Your reservation"/>
            </form>
        </div>
    )
}
export default Reservation;