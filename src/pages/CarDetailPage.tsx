import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarDetail from '../components/CarDetail';
import { CARS_DATA } from '../constants';

const CarDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const selectedCar = useMemo(() => 
        CARS_DATA.find(car => car.id === id) || null
    , [id]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [id]);

    if (!selectedCar) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-[#1a2b48] mb-4">Car Not Found</h2>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-[#e81c24] text-white px-8 py-3 rounded-md font-bold uppercase"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <CarDetail car={selectedCar} onBack={() => navigate(-1)} />
    );
};

export default CarDetailPage;
