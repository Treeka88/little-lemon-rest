function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch, submitForm }) {
          const today = new Date().toISOString().split("T")[0];

            const handleSubmit = (e) => {
            e.preventDefault();
            submitForm({ date, time, guests, occasion });
          }
          const isFormValid = date && time && guests > 0 && occasion;
    return(
        <div>
            <h1 id="booking-form-title">Book your table</h1>
            <form 
                style={{display: 'grid', gap: '20px', maxWidth: 200, margin: 'auto'}}
                aria-labelledby="booking-form-title"
                onSubmit={handleSubmit}
            >
                   <label htmlFor="res-date">Choose date  <span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="date" 
                        id="res-date" 
                        value={date} 
                        min={today}
                       onChange={(e) => {
                                const selectedDate = e.target.value;
                                setDate(selectedDate);
                                dispatch({
                                type: 'UPDATE_TIMES',
                                date: selectedDate,
                                 });
                                }}
                        required
                        aria-describedby="date-help"
                    />
                    <div id="date-help" className="sr-only">Select your preferred reservation date</div>
                    <label htmlFor="res-time">Choose time  <span style={{color: 'red'}}>*</span></label>
                    <select 
                        id="res-time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)}
                        required
                        aria-describedby="time-help"
                    >
                        {availableTimes?.map((t) => <option key={t} value={t}>{t}</option>) || []}
                    </select>
                    <div id="time-help" className="sr-only">Available reservation times update based on selected date</div>
                    <label htmlFor="guests">Number of guests</label>
                    <input 
                        type="number" 
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests" 
                        value={guests} 
                        onChange={(e) => setGuests(e.target.value)}
                        required
                        aria-describedby="guests-help"
                    />
                    <div id="guests-help" className="sr-only">Enter number of guests (1-10)</div>
                    <label htmlFor="occasion">Occasion <span style={{color: 'red'}}>*</span></label>
                    <select 
                        id="occasion" 
                        value={occasion} 
                        onChange={(e) => setOccasion(e.target.value)}
                        aria-describedby="occasion-help"
                        required
                    >
                        <option value="">Select an occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>casual meeting</option>
                        <option>Other</option>
                    </select>
                    <div id="occasion-help" className="sr-only">Optional: Select the occasion for your reservation</div>
                    <input 
                        type="submit" 
                        value="Make Your reservation"
                        disabled={!isFormValid}
                        aria-describedby="submit-help"
                    />
                    <div id="submit-help" className="sr-only">Submit your reservation request</div>
            </form>
        </div>
    )
}
export default BookingForm;