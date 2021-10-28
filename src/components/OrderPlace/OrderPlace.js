import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './OrderPlace.css';

const OrderPlace = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div style={{ marginTop: 30 }}>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <input defaultValue="Yasin" {...register("name")} className="mt-0"/>
                    <input defaultValue="abc@abc.com" {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="Tour Title" defaultValue="" {...register("tourTitle")} />
                    <input placeholder="Tour Description" defaultValue="" {...register("description")} />
                    <input placeholder="Price" defaultValue="" {...register("price")} />
                    <input placeholder="Image" defaultValue="" {...register("image")} />

                    <input className="btn btn-regular" type="submit" />
                </Card>
            </form>
        </div>
    );
};

export default OrderPlace;