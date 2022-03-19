import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

import { supabase } from '../supabase';

const Profile = (props) => {
    const [autos, setAutos] = useState([])
    useEffect(() => {
        fetchData();
        console.log(autos)
    }, [])

    async function fetchData() {
        let { data: autos } = await supabase
            .from('cars')
            .select('*')
        setAutos(autos);
    }

    async function addCars() {
        const { data: autos } = await supabase
            .from('cars')
            .insert([
                { brand: 'polonez' }
            ])
        setAutos(autos);
    }

    async function modifyCar() {
        const { data: autos} = await supabase
            .from('cars')
            .update({ brand: 'skoda' })
            .match({ brand: 'Ford' })
            setAutos(autos);
    }
    async function removeCar() {
        const { data: autos } = await supabase
            .from('cars')
            .delete()
            .match({ id: 3 })
        setAutos(autos);
    }


    return (
        <Layout>
            <h1>Protected Page - profile</h1>
            <div>{autos.map(car => (
                <div key={car.id}>
                    <div>{car.id}</div>
                    <div>{car.brand}</div>
                </div>
            ))}</div>
            <button onClick={addCars}>dodaj car</button>
            <button onClick={removeCar}>usuń car</button>
            <button onClick={modifyCar}>modyfikuj car</button>
        </Layout>
    );
}

export default Profile;