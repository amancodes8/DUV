import React from 'react';

const events = [
  { name: 'Independence Day', folder: 'independenceday' },
  { name: 'Janmashtmi', folder: 'janmashtmi' },
  { name: 'Mothers Day', folder: 'mothersday' },
  { name: 'Picnic', folder: 'picnic' },
  { name: 'Pink Day', folder: 'Pinkday' },
  { name: 'Teachers Day', folder: 'teachersday' },
  { name: 'Vasant Panchami', folder: 'panchami' },
  { name: 'Yoga', folder: 'yoga' },
];

const Gallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-2 sm:p-10 bg-white mt-28 sm:mt-40">

      {events.map((event) => (
        <div key={event.folder} className="w-1/4 p-2">
          <h2 className="text-center text-lg sm:text-3xl text-black font-semibold mb-4">{event.name}</h2>
          <div className="grid grid-cols-1 gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="relative group">
                <img
                  src={`./Assets/${event.folder}/${index + 1}.jpg`}
                  alt={`${event.name} ${index + 1}`}
                  className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex justify-center items-center">
                  <p className="text-white text-lg">View Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
