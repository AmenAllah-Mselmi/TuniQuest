import React, { useState } from 'react';
import 'aframe';

const TunisiaVRTour = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      id: 1,
      name: 'Amphitheatre of El Jem',
      vrImage: 'https://example.com/el-jem-360.jpg',
      description: 'A Roman amphitheatre in El Jem, Tunisia.',
    },
    {
      id: 2,
      name: 'Bardo Museum',
      vrImage: 'https://example.com/bardo-museum-360.jpg',
      description: 'A museum of antiquities in Tunis, Tunisia.',
    },
    {
      id: 3,
      name: 'Medina of Tunis',
      vrImage: 'https://example.com/medina-tunis-360.jpg',
      description: 'A UNESCO World Heritage Site in Tunis.',
    },
  ];

  const handlePlaceChange = (event) => {
    const placeId = parseInt(event.target.value, 10);
    const place = places.find((p) => p.id === placeId);
    setSelectedPlace(place);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Tunisia in VR</h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="place-select" className="block text-lg font-medium text-gray-700">
            Select a Historic Place or Museum:
          </label>
          <select
            id="place-select"
            onChange={handlePlaceChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Choose a place...</option>
            {places.map((place) => (
              <option key={place.id} value={place.id}>
                {place.name}
              </option>
            ))}
          </select>
        </div>

        {selectedPlace && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{selectedPlace.name}</h2>
            <p className="text-gray-600 mb-6">{selectedPlace.description}</p>
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <a-scene embedded>
                <a-sky src={selectedPlace.vrImage} rotation="0 -90 0"></a-sky>
              </a-scene>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TunisiaVRTour;