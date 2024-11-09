


import React, { useState } from 'react';

const CreateEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [banner, setBanner] = useState(null);
  const [hostName, setHostName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [eventType, setEventType] = useState('');
  const [expectedAttendees, setExpectedAttendees] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [techFocused, setTechFocused] = useState('');
  const [agenda, setAgenda] = useState('');
  const [sponsors, setSponsors] = useState([{ name: '', link: '' }]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks({ ...socialLinks, [name]: value });
  };

  const addSponsor = () => {
    setSponsors([...sponsors, { name: '', link: '' }]);
  };

  const removeSponsor = (index) => {
    setSponsors(sponsors.filter((_, i) => i !== index));
  };

  const handleSponsorChange = (index, field, value) => {
    const updatedSponsors = [...sponsors];
    updatedSponsors[index][field] = value;
    setSponsors(updatedSponsors);
  };

  const validate = () => {
    const validationErrors = {};

    if (!eventName.trim()) {
      validationErrors.eventName = 'Event name is required';
    }

    if (!description.trim()) {
      validationErrors.description = 'Event description is required';
    }

    if (!banner) {
      validationErrors.banner = 'Event banner is required';
    }

   

    if (!twitter.trim()) {
      validationErrors.twitter = 'Twitter link is required';
    }
    if (!instagram.trim()) {
      validationErrors.instagram = 'Instagram link is required';
    }
    if (!linkedin.trim()) {
      validationErrors.linkedin = 'LinkedIn link is required';
    }
    if (!website.trim()) {
      validationErrors.website = 'Website link is required';
    }

    if (!eventDate) {
      validationErrors.eventDate = 'Event date is required';
    }

    if (!contactEmail.trim()) {
      validationErrors.contactEmail = 'Contact email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactEmail)) {
      validationErrors.contactEmail = 'Email is invalid';
    }

 
    if (!targetAudience) validationErrors.targetAudience = 'Target audience is required.';
    if (!eventType) validationErrors.eventType = 'Event type is required.';
    if (!expectedAttendees || expectedAttendees <= 0) validationErrors.expectedAttendees = 'Expected number of attendees must be greater than 0.';
    if (ticketPrice === '') validationErrors.ticketPrice = 'Ticket price is required.';
    if (!techFocused) validationErrors.techFocused = 'Please specify if the event is tech-focused.';
    if (!agenda) validationErrors.agenda = 'Agenda is required.';

    if (!hostName) validationErrors.hostName = 'Host name is required.';
    if (!eventDate) validationErrors.eventDate = 'Event date is required.';
    if (!contactEmail) {
      validationErrors.contactEmail = 'Contact email is required.';
    } else if (!/\S+@\S+\.\S+/.test(contactEmail)) {
      validationErrors.contactEmail = 'Enter a valid email address.';
    }
    if (!country) validationErrors.country = 'Country is required.';
    if (!streetAddress) validationErrors.streetAddress = 'Street address is required.';
    if (!city) validationErrors.city = 'City is required.';
    if (!state) validationErrors.state = 'State is required.';
    if (!zipCode) {
      validationErrors.zipCode = 'Zip code is required.';
    } else if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
      validationErrors.zipCode = 'Enter a valid zip code.';
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully');
      // Add form submission logic here
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div className='bg-gray-100 py-4'>
      <h2 className="text-3xl font-bold text-center py-2 text-pink-600">Create Event</h2>
      <div className="flex justify-center min-h-screen bg-gray-100 py-2">
        <form className="w-full max-w-lg p-6 space-y-6" onSubmit={handleSubmit}>

          {/* Event Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter the event name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.eventName && <p className="text-red-500 text-sm">{errors.eventName}</p>}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a few sentences about your event."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          {/* Banner */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Banner of Event</label>
            <input
              type="file"
              onChange={(e) => setBanner(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
            {errors.banner && <p className="text-red-500 text-sm">{errors.banner}</p>}
          </div>

          {/* // Event Information Section */}
          <h3 className="text-2xl font-bold text-gray-800 mt-8 ">Event Information</h3>
          <p className="text-gray-600 mb-2">Give some specific information about your awesome event.</p>
<div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Target Audience</label>
        <select
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.targetAudience ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select Target Audience</option>
          <option value="Everyone">Everyone</option>
          <option value="Music Lovers">Music Lovers</option>
          <option value="Tech Enthusiasts">Tech Enthusiasts</option>
        </select>
        {errors.targetAudience && <p className="text-red-500 text-xs mt-1">{errors.targetAudience}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Type</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.eventType ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select Event Type</option>
          <option value="In Person">In Person</option>
          <option value="Online">Online</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
      </div>

     <div className='flex gap-3'>
     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Expected Number of Attendees</label>
        <input
          type="number"
          value={expectedAttendees}
          onChange={(e) => setExpectedAttendees(e.target.value)}
          placeholder="0"
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.expectedAttendees ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.expectedAttendees && <p className="text-red-500 text-xs mt-1">{errors.expectedAttendees}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Ticket Price (Enter 0 if free)</label>
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          placeholder="0"
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.ticketPrice ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.ticketPrice && <p className="text-red-500 text-xs mt-1">{errors.ticketPrice}</p>}
      </div>

     </div>
      <div className='sm:flex gap-12'>
        <div className="mb-4 sm:w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Tech Focused</label>
          <select
            value={techFocused}
            onChange={(e) => setTechFocused(e.target.value)}
            className={`w-full p-2 border rounded-md focus:outline-none ${errors.techFocused ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.techFocused && <p className="text-red-500 text-xs mt-1">{errors.techFocused}</p>}
        </div>
        
        <div className="mb-4 sm:w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Agenda</label>
          <input
            type="text"
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            placeholder="Enter event agenda"
            className={`w-full p-2 border rounded-md focus:outline-none ${errors.agenda ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.agenda && <p className="text-red-500 text-xs mt-1">{errors.agenda}</p>}
        </div>
      </div>

          {/* Sponsor Details */}
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Sponsor Details</h3>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex   gap-4 mb-4">
              <input
                type="text"
                placeholder="Sponsor Name"
                value={sponsor.name}
                onChange={(e) => handleSponsorChange(index, 'name', e.target.value)}
                className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
             
              <input
                type="text"
                placeholder="Sponsor Link"
                value={sponsor.link}
                onChange={(e) => handleSponsorChange(index, 'link', e.target.value)}
                className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
             
              <button
                type="button"
                onClick={() => removeSponsor(index)}
                className="p-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSponsor}
            className="w-full p-2 mt-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          >
            Add Sponsor
          </button>

{/* //////////////////////////////////////////// */}
          {/* Event Date */}
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Event Contact</h3>
    <div className='flex gap-3 '> 
    <div className="mb-4 sm:w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2">Host Name</label>
        <input
          type="text"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          placeholder="Host Name"
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.hostName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.hostName && <p className="text-red-500 text-xs mt-1">{errors.hostName}</p>}
      </div>

      <div className="mb-4 sm:w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.eventDate ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
      </div> 
    </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Contact Email Address</label>
        <input
          type="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          placeholder="Contact Email"
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
        <input
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          placeholder="Enter the street address"
          className={`w-full p-2 border rounded-md focus:outline-none ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
      </div>

      <div className="flex gap-2">
        <div className="mb-4 w-full md:w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter the city"
            className={`w-full p-2 border rounded-md focus:outline-none ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        <div className="mb-4 w-full md:w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter the state"
            className={`w-full p-2 border rounded-md focus:outline-none ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>

        <div className="mb-4 w-full md:w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter the zip code"
            className={`w-full p-2 border rounded-md focus:outline-none ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>
      </div>

      

{/* /////////////////////////// */}
       {/* Social Links */}
       <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Social Links</h3>
         <div className='flex gap-3 '>
           <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Twitter</label>
            <input
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="Twitter link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.twitter && <p className="text-red-500 text-sm">{errors.twitter}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Website</label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Website link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
          </div>
          </div>

         <div className='flex gap-3' > 
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Instagram</label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="Instagram link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.instagram && <p className="text-red-500 text-sm">{errors.instagram}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="LinkedIn link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
          </div>
         </div>
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
