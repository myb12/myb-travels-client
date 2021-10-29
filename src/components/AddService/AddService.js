import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch('https://glacial-tor-88710.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Service Inserted Successfully');
                    reset();
                    history.push('/home');
                }
            })

    };




    return (
        <Container style={{ marginTop: 80 }}>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <Card>
                    <h5 className="text-center">Add a service</h5>
                    <input  {...register("title", { required: true })} placeholder="Tour Title" />
                    {errors.title && <span className="error">This field is required</span>}

                    <input {...register("price", { required: true })} placeholder="Price" />
                    {errors.price && <span className="error">This field is required</span>}

                    <input placeholder="Description"  {...register("desc", { required: true })} />
                    {errors.desc && <span className="error">This field is required</span>}

                    <input placeholder="Image URL"  {...register("imgURL", { required: true })} />
                    {errors.imgURL && <span className="error">This field is required</span>}

                    <input className="btn btn-regular" type="submit" />
                </Card>
            </form>
        </Container>
    );
};

export default AddService;