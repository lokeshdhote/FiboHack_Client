import React, { useState } from 'react';

const CreateEventForm = () => {
  const [socialLinks, setSocialLinks] = useState({
    twitter: '',
    instagram: '',
    linkedin: '',
    website: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks({ ...socialLinks, [name]: value });
  };

  const [sponsors, setSponsors] = useState([{ name: '', link: '' }]);

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

  return (
    <div className='bg-gray-100 py-4'>
      <h2 className="text-3xl font-bold text-center py-2 text-pink-600">Create Event</h2>
      <div className="flex justify-center min-h-screen bg-gray-100 py-2">
        <form className="w-full max-w-lg p-6 space-y-6">

          {/* Basic Event Details */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
            <input
              type="text"
              placeholder="Enter the event name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              placeholder="Write a few sentences about your event."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Banner of Event</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <p className="text-gray-500 text-xs mt-1">PNG, JPG, up to 10MB</p>
          </div>

          {/* Event Information Section */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Event Information</h3>
          <p className="text-gray-600 mb-4">Give some specific information about your awesome event.</p>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Target Audience</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option>Everyone</option>
              <option>Music Lovers</option>
              <option>Tech Enthusiasts</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Event Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option>In Person</option>
              <option>Online</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Expected Number of Attendees</label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Ticket Price (Enter 0 if free)</label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className='sm:flex gap-12'>
            <div className="mb-4 sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Tech Focused</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            
            <div className="mb-4 sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Agenda</label>
              <input
                type="text"
                placeholder="Enter event agenda"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Sponsor Details with Add/Remove Functionality */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Sponsor Details</h3>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-wrap gap-4 mb-4">
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

          {/* Event Contact Section */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Event Contact</h3>
          <div className='sm:flex gap-4'>
            <div className="mb-4 sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Host Name</label>
              <input
                type="text"
                placeholder="Host Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Event Date</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contact Email Address</label>
            <input
              type="email"
              placeholder="Contact Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Address Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
            <input
              type="text"
              placeholder="Enter the street address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex  gap-2">
  <div className="mb-4 w-full md:w-1/3">
    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
    <input
      type="text"
      placeholder="Enter the city"
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>

  <div className="mb-4 w-full md:w-1/3">
    <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
    <input
      type="text"
      placeholder="Enter the state"
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>

  <div className="mb-4 w-full md:w-1/3">
    <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
    <input
      type="text"
      placeholder="Enter the zip code"
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>
</div>


          {/* Social Media Links */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Social Links</h3>
          <div className='flex gap-2' >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Twitter</label>
            <input
              type="text"
              name="twitter"
              value={socialLinks.twitter}
              onChange={handleInputChange}
              placeholder="Twitter link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Instagram</label>
            <input
              type="text"
              name="instagram"
              value={socialLinks.instagram}
              onChange={handleInputChange}
              placeholder="Instagram link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          
          </div>
   <div className=' flex gap-2 '>    
       <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={socialLinks.linkedin}
              onChange={handleInputChange}
              placeholder="LinkedIn link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Website</label>
            <input
              type="text"
              name="website"
              value={socialLinks.website}
              onChange={handleInputChange}
              placeholder="Website link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
</div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="px-6 py-2 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 focus:outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
