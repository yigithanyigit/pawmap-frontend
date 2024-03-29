import React, {useState, useContext} from 'react';
import FormComponent from './FormComponent';
import DataComponent from './DataComponent';
import { useSelectedMarker, useTempMarker } from './Context';



const WindowComponent = ({}) => {

  const {selectedMarker, setSelectedMarker} = useSelectedMarker();
  const {tempMarker, setTempMarker} = useTempMarker();

    const [formData, setFormData] = useState({
        location: {
          lat: selectedMarker ? selectedMarker.location.lat : '',
          long: selectedMarker ? selectedMarker.location.lng : '',
        },
        user_ip: '',
        title: '',
        text: '',
        photo_id: '',
      });
  
    return (
    <div className="flex justify-center sm:justify-end md:justify-end lg:justify-end  inset-0 absolute items-end sm:items-center lg:items-center">
        <div className={"px-8 pt-6 pb-8 mb-4 m-2 md:px-8 md:pt-6 md:pb-8 md:mb-4 md:mr-3 bg-white border rounded-2xl shadow-md z-10 xs:w-[90vw] md:w-[40vw] lg:w-[30vw]  "}>
            <h3 className="text-lg font-semibold mb-4 break-words">Details Of Event</h3>
            <p className="mb-2 hidden">Marker ID: {selectedMarker.id}</p>
            <p className="mb-2 hidden">Latitude: {selectedMarker.location.lat}</p>
            <p className="mb-2 hidden">Longitude: {selectedMarker.location.long}</p>

            {tempMarker === selectedMarker ? <FormComponent formData={formData} setFormData={setFormData} setSelectedMarker={setSelectedMarker} setTempMarker={setTempMarker}/> : <DataComponent marker={selectedMarker}/>}

        </div>
    </div>
  );
};

export default WindowComponent;
