import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { BASE_URL } from '../../config/config';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch(`${BASE_URL}/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Tour Added Successfully');
                    reset();
                    history.push('/home');
                }
            })

    };

    return (
        <Container style={{ marginTop: 100 }}>
            <div className="section-header section-margin-top row">
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h2 className="section-title">Add a Tour</h2>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
            </div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <Card>
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